import * as React from 'react'
import { Item } from '../item/item.component'
import { ListControls } from '../ListControls/ListControls.component';
import { useTodoList } from '../_shared/context/useTodoList'

const { useState, useEffect } = React

export const List = () => {
  const [isComplete, setIsComplete] = useState([])
  const [itemCount, setItemCount] = useState(0)
  const [tempList, setTempList] = useState([])
  const { todoList, setTodoList, filterTerm, setFilterTerm } = useTodoList();

  useEffect(() => {
    setTempList([...todoList])
  }, [todoList])

  // useEffect(() => {
  //   setItemCount(0)
  //   tempList.forEach((item) => {
  //     console.log(item)
  //     if (item.status === 'active') {
  //       setItemCount(itemCount + 1)
  //     }
  //     if (item.status === 'complete') {
  //       setItemCount(itemCount - 1)
  //     }
  //     if (itemCount <= 0) {
  //       setItemCount(0)
  //     }
  //   })
  // }, [tempList])

  // useEffect(() => {
  //   if (filterTerm === 'all') {
  //     let tempArray = []
  //     todoList.forEach((item) => {
  //       item.hide = false;
  //       tempArray.push(item)
  //     })
  //     setTodoList(tempArray)
  //   }
  //    if (filterTerm === 'active') {
  //     let tempArray = []
  //     todoList.forEach((item) => {
  //       if (item.status === 'active') {
  //         item.hide = false
  //       } else {
  //         item.hide = true
  //         console.log(item)
  //       }
  //       tempArray.push(item)
  //     })
  //      setTodoList(tempArray)
  //   }
  //   if (filterTerm === 'complete') {
  //     let tempArray = []
  //     todoList.forEach((item) => {
  //       if (item.status === 'complete') {
  //         item.hide = false;
  //       } else {
  //         item.hide = true;
  //       }
  //       tempArray.push(item)
  //     })
  //     setTodoList(tempArray)
  //   }
  // }, [filterTerm])

  // const checkForComplete = () => {
  //   todoList.forEach((item) => {
  //     if (item.status === 'complete') {
  //       const tempArray = []
  //       tempArray.push(item.status)
  //       setIsComplete([...tempArray])
  //     }
  //   })
  // }

  const changeItemStatus = (id, status) => {
    todoList.forEach((item) => {
      if (item.id !== id) {
        setTempList([...tempList, item])
      } else {
        item.status = status === 'active' ? 'complete' : 'active';
        setTempList([...tempList, item])
      }
    })
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

  const filterSelection = (term) => {
    setFilterTerm(term)
    console.log(filterTerm)
  }

  const renderItems = (todoList) => {
    return todoList.map((item) => {
      return <Item key={item.id} title={item.title} id={item.id} status={item.status} onCheck={changeItemStatus} onRemoveItem={removeItem} hide={item.hide} />
    })
  }

  return (
    <div>
      {renderItems(todoList)}
      {todoList.length >= 1 && (
        <ListControls itemCount={itemCount} onRemoveAllComplete={removeAllComplete} isComplete={isComplete} onFilter={filterSelection} />
      )}
    </div>
  )
}