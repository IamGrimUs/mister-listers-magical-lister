import * as React from 'react';

export const Button = ({text, onRemoveItem, id}) => {

  return (
    <button onClick={() => onRemoveItem(id)}>{text}</button>
  )
}