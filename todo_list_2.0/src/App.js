import './App.css';
import React, { useState } from 'react'
import TodoList from './components/TodoList';
import Input from './components/Input';

function App() {
  const [inputValue, setInput ] = useState('');
  const [list, setList] = useState([]);
  
  const handleChange = ({ target: { value } }) => {
    setInput(value);
  }
  
  const handleButton = () => {
    setList(list.concat(inputValue));
    setInput('');
  }

  return (
    <div className="App">
      <header>Lista de afazeres</header>
      <Input type="text" handleChange={ handleChange } value={ inputValue } />
      <button onClick={ handleButton }>Adicionar</button>
      <TodoList list={ list } />
    </div>
  );
}

export default App;
