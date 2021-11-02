import React from "react";

export default function TodoList({list, onDragStart, onDragEnd, onDrop}) {
  return(
    list.map((item, index) => (
      <div
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        data-id={index}
        key={index}
      >{item}
      </div>
      )
    )
  )
}
