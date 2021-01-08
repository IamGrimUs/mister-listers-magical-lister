import * as React from 'react'
import { useTodoList } from '../_shared/context/useTodoList'

const { useState} = React

export const TextInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { todoList, setTodoList } = useTodoList();

  const passItemToList = (e) => {
    e.preventDefault();
    let tempObj = { title: inputValue, id: Date.now(), status: 'active' }
    let tempArray = [...todoList, tempObj]
    setTodoList(tempArray);
    setInputValue('');
  }

  return (
    <div>
      <form onSubmit={passItemToList}>
        <input text="type" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </form>
    </div>
  )
}