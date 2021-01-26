import * as React from 'react'
import { Item } from '../item/item.component'
import { ListControls } from '../ListControls/ListControls.component';
import { useTodoList } from '../_shared/context/useTodoList'

const { useState, useEffect } = React

export const List = () => {
  const [ acitveItemCount, setActiveItemCount ] = useState(0)
  const [ showDeleteComplete, setShowDeleteComplete ] = useState(false)
  const [ renderList, setRenderList ] = useState([])
  const { todoList, setTodoList } = useTodoList()

  useEffect(() => {
    setRenderList([...todoList])
  }, [todoList])

  useEffect(() => {
    const tempList = todoList.filter((item) => item.status === 'active')
    setActiveItemCount(tempList.length)
    tempList.length < todoList.length ? setShowDeleteComplete(true) : setShowDeleteComplete(false)
  }, [todoList])

  const changeItemStatus = (id) => {
    const tempList = [...todoList]
    const index = tempList.findIndex(item => item.id === id)

    if (tempList[index].status === 'active') {
      tempList[index]['status'] = 'complete'
    } else {
      tempList[index]['status'] = 'active'
    }
    setTodoList([...tempList])
  }

  const removeItem = (id) => {
    const tempList = todoList.filter(item => item.id !== id)
    setTodoList([...tempList])
  }

  const removeAllComplete = () => {
    const tempList = todoList.filter(item => item.status !== 'complete')
    setTodoList([...tempList])
  }

  const filterListItems = (term) => {
    if (term === 'all') {
      setRenderList([...todoList])
      return;
    }
    const filterList = todoList.filter((item) => {
      return item.status === term
    })
    setRenderList([...filterList])
  }

  const renderItems = () => {
    return renderList.map((item) => {
      return <Item key={item.id} title={item.title} id={item.id} status={item.status} onChecked={changeItemStatus} onRemoveItem={removeItem} />
    })
  }

  return (
    <div>
      {renderItems(todoList)}
      {todoList.length >= 1 && (
        <ListControls activeItems={acitveItemCount} onRemoveAllComplete={removeAllComplete} onFilter={filterListItems} isComplete={showDeleteComplete} />
      )}
    </div>
  )
}