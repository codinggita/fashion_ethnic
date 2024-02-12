import React from 'react'

export default function Dropdown() {
  return (
    <>
      <select className='dropdown'>
        <option className='dropdown-ops' disabled selected hidden>Sort by</option>
        <option className='dropdown-ops'>Price Low-High</option>
        <option className='dropdown-ops'>Price High-Low</option>
      </select>
    </>
  )
}
