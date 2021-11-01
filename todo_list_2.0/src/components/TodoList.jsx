import React from "react";

export default function TodoList({list}) {
  return(
    list.map((item, index) => <div key={index}>{item}</div>)
  )
}
