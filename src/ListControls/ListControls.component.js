import * as React from 'react'

import './ListControls.styles.css'

export const ListControls = ({ length, onRemoveAllComplete, onFilter, isComplete }) => {
  return (
    <div className="flex-box__row form-controls-container">
      <div className="count">
        <p>{length === 1 ? `${length} item left` : `${length} items left`}</p>
      </div>
      <div className="filters">
        <button onClick={() => onFilter('all')}>all</button>
        <button onClick={() => onFilter('active')}>active</button>
        <button onClick={() => onFilter('complete')}>complete</button>
      </div>
      <div className="clearAll">
        {isComplete.includes('complete') && (
          <button onClick={() => onRemoveAllComplete()}>clear complete</button>
        )}
      </div>
    </div>
  )
}