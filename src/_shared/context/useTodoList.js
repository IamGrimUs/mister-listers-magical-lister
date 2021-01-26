import * as React from 'react'

const { createContext, useContext, useState } = React;

const DEFAULT_LIST_CONTEXT = {
  todoList: [],
  setTodoList: () => {},
}

const ListContext = createContext(DEFAULT_LIST_CONTEXT)

export const useTodoList = () => {
  return useContext(ListContext);
}

export const ListContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([])

  return (
    <ListContext.Provider value={{ todoList, setTodoList}}>{children}</ListContext.Provider>
  )
}