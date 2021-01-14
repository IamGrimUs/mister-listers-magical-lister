import * as React from 'react'
import { Item } from '../item/item.component'
import { ListControls } from '../ListControls/ListControls.component';
import { useTodoList } from '../_shared/context/useTodoList'

const { useState, useEffect } = React

export const List = () => {
  const [ isComplete, setIsComplete ] = useState([])
  const { todoList, setTodoList, filterTerm, setFilterTerm } = useTodoList();

  const checkForComplete = () => {
    todoList.forEach((item) => {
      if (item.status === 'complete') {
        const tempArray = []
        tempArray.push(item.status)
        setIsComplete([...tempArray])
      }
    })
  }

  const changeItemStatus = (id, status) => {
    setIsComplete([])
    const tempList = []
    todoList.forEach((item) => {
      if (item.id !== id) {
        tempList.push(item)
      } else {
        item.status = status === 'active' ? 'complete' : 'active';
        tempList.push(item)
      }
    })
    setTodoList([...tempList])
    checkForComplete()
  }

  const removeItem = (id) => {
    const tempList = todoList.filter(item => item.id !== id)
    setTodoList([...tempList])
  }

  const removeAllComplete = () => {
    const tempList = todoList.filter(item => item.status !== 'complete')
    setTodoList([...tempList])
  }

  const filterSelection = (term) => {
    setFilterTerm(term)
    console.log(filterTerm)
  }

  useEffect(() => {
    if (filterTerm === 'all') {
      let tempArray = []
      todoList.forEach((item) => {
        item.hide = false;
        tempArray.push(item)
      })
      setTodoList(tempArray)
    }
     if (filterTerm === 'active') {
      let tempArray = []
      todoList.forEach((item) => {
        if (item.status === 'active') {
          item.hide = false
        } else {
          item.hide = true
          console.log(item)
        }
        tempArray.push(item)
      })
       setTodoList(tempArray)

    }
    if (filterTerm === 'complete') {
      let tempArray = []
      todoList.forEach((item) => {
        if (item.status === 'complete') {
          item.hide = false;
        } else {
          item.hide = true;
        }
        tempArray.push(item)
      })
      setTodoList(tempArray)
    }
  }, [filterTerm])



  const renderItems = (todoList) => {
    return todoList.map((item, index) => {
      return <Item key={item.id} title={item.title} id={item.id} status={item.status} onCheck={changeItemStatus} onRemoveItem={removeItem} hide={item.hide} />
    })
  }

  return (
    <div>
      {renderItems(todoList)}
      {todoList.length >= 1 && (
        <ListControls length={todoList.length} onRemoveAllComplete={removeAllComplete} isComplete={isComplete} onFilter={filterSelection} />
      )}
    </div>
  )
}