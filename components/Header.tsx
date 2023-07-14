import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-col'>
      <div className="flex justify-between">
        <div className="flex">Logo</div>
        <div className="flex">
          <div>Bar</div>
          <div>Icon</div>
        </div>
        <div className="flex">Acc</div>
      </div>
      <div className='flex justify-center'>Filters</div>
    </header>
  )
}

export default Header
