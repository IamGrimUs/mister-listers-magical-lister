import * as React from 'react'
import { Item } from '../item/item.component'
import { useTodoList } from '../_shared/context/useTodoList'

const renderItems = (todoList) => {
  return todoList.map((item, index) => {
    return <Item key={'item-' + index} title={item.title} description={item.description} />
  })
}

export const List = () => {
  const { todoList } = useTodoList();
  console.log(todoList)

  return (
    <div>
      {renderItems(todoList)}
    </div>
  )
}