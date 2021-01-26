import * as React from 'react'

import './ListControls.styles.css'

export const ListControls = ({ activeItems, onRemoveAllComplete, onFilter, isComplete }) => {
  return (
    <div className="flex-box__row form-controls-container">
      <div className="count">
        <p>{activeItems}{activeItems === 1 ? ' item left' : ' items left'}</p>
      </div>
      <div className="filters">
        <button onClick={() => onFilter('all')}>all</button>
        <button onClick={() => onFilter('active')}>active</button>
        <button onClick={() => onFilter('complete')}>complete</button>
      </div>
      <div className="clearAll">
        {isComplete && (
          <button onClick={() => onRemoveAllComplete()}>clear complete</button>
        )}
      </div>
    </div>
  )
}