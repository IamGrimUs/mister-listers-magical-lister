import * as React from 'react'
import { Item } from '../item/item.component'

const { useState } = React;

const itemList = [{title:"hello", description: "world"}, {title:"hello2", description: "world2"}, {title:"hello3", description: "world3"}]

const renderItems = (items) => {
  return items.map((item, index) => {
    return <Item key={'item-' + index} title={item.title} description={item.description} />
  })
}

export const List = () => {
const [items, setItemList] = useState(itemList)
  return (
    <div>
      {renderItems(items)}
    </div>
  )
}