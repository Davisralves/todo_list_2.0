import './App.css';
import React, { useState } from 'react'
import TodoList from './components/TodoList';
import Input from './components/Input';

function App() {
  const [inputValue, setInput ] = useState('');
  const [list, setList] = useState([]);
  const [dragElement, setDragElement] = useState();
  const [dropElement, setDropElement] = useState();

  const handleInput = ({ target: { value } }) => {
    setInput(value);
  }
  
  const handleButton = () => {
    setList(list.concat(inputValue));
    setInput('');
  }
  
  const onDragStart = (e) => {
    setDragElement(e.target);
  }
  const onDragEnd = (e) => {
    e.preventDefault();
    const {dataset: {id: dragElementId} } = dragElement
    const {dataset: {id: dropElementId} } = dropElement
    if(dragElement && dropElement) {
      setList(() => {
        list.splice(parseInt(dragElementId), 1 , dropElement.outerText );
        list.splice(parseInt(dropElementId), 1 , dragElement.outerText );
        return list;
      })
      setDragElement(null);
      setDropElement(null);
    }
  } 
  
  const onDrop = (e) => {
    setDropElement(e.target);
  } 

  return (
    <main className="App">
      <header>Lista de afazeres</header>
      <Input type="text" handleInput={ handleInput } value={ inputValue } />
      <button onClick={ handleButton }>Adicionar</button>
      <TodoList list={ list } onDragStart={onDragStart} onDragEnd={onDragEnd} onDrop={onDrop} />
    </main>
  );
}

export default App;
