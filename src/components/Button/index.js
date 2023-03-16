import React from 'react'

function Button({ onClick }) {
  return (
    <div className='container-button-add'>
        <button onClick={onClick} className='button-add'>
            Add to card
        </button>
    </div>
  )
}

export default Button