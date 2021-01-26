import * as React from 'react'
import { Button } from '../_shared/Button.component'
import './item.styles.css'

const {useState} = React

export const Item = ({ title, status, id, onChecked, onRemoveItem }) => {
  const [ isShown, setIsShown ] = useState(false)

  const statusChange = () => {
    onChecked(id)
  }

  return (
    <div className="item-container" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <form className="flex-box__row">
        <div className="checkbox-container">
          <input type="checkbox" onChange={statusChange} checked={status === 'active' ? false : true} />
        </div>
        <div className={ `${status === 'complete' ? 'complete' : 'active'} ${'text-container'}`}>
          <h2>{title}</h2>
        </div>
        <div className="remove-container">
          {isShown && (<Button text={'x'} id={id} onRemoveItem={onRemoveItem} />)}
        </div>
      </form>
    </div>
  )
}