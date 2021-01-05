import * as React from 'react'

const { createContext, useContext, useState } = React;

const DEFAULT_LIST_CONTEXT = {
  todoList: [],
  setTodoList: () => {},
  filterTerm: '',
  setFilterTerm: () => {}
}

const ListContext = createContext(DEFAULT_LIST_CONTEXT)

export const useTodoList = () => {
  return useContext(ListContext);
}

export const ListContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([{title:"hello", description: "world"}, {title:"hello2", description: "world2"}, {title:"hello3", description: "world3"}, {title:"hello4", description: "world4"}])
  const [filterTerm, setFilterTerm] = useState('all')

  return (
    <ListContext.Provider value={{ todoList, setTodoList, filterTerm, setFilterTerm }}>{children}</ListContext.Provider>
  )
}