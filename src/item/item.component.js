import * as React from 'react'
import './item.styles.css'

export const Item = ({ title, description }) => {
  return (
    <div className="flex-box__row item-container">
      <div>
        <form><input type="checkbox" /></form>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}