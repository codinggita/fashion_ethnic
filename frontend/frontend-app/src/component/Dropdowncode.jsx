import React from 'react'

export default function Dropdowncode() {
  return (
    <>
      <select className='dropdown-code'>
        <option className='dropdown-code-ops' disabled selected hidden>+91</option>
        <option className='dropdown-code-ops'>+81</option>
        <option className='dropdown-code-ops'>+54</option>
      </select>
    </>
  )
}
