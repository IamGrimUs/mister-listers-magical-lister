import * as React from 'react'
import { Button } from '../_shared/Button.component'
import './item.styles.css'

const {useState} = React

export const Item = ({ title, status, id, onCheck, hide, onRemoveItem }) => {
  const [ isShown, setIsShown ] = useState(false)

  const statusChange = () => {
    onCheck(id, status)
  }

  return (
    <div className="item-container" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={{display: hide ? 'none' : 'block'}}>
      <form className="flex-box__row">
        <div className="checkbox-container">
          <input type="checkbox" onClick={statusChange} />
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