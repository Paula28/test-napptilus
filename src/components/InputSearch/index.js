import React from 'react'

function InputSearch({onChange, value}) {
  return (
    <div>
      <label className='label-search'>
        <input onChange={onChange} className='inputSearch' type="text" placeholder="Search by Brand or Model"/>
      </label>
    </div>
  )
}

export default InputSearch