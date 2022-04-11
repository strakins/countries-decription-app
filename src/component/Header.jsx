import React from 'react'
import Toggle from './Toggle'

const Header = () => {
  return (
    <div>
        <header className='flex justify-between fixed w-full p-8 shadow-lg bg-lightModeElement dark:bg-darkModeElement dark:text-darkModeText'>
            <div>
                <h3 className='text-lightModeText dark:text-darkModeText font-bold text-2xl'>Where in the World?</h3>
            </div>
            <div>
                < Toggle />
            </div>
        </header>
    </div>
  )
}

export default Header