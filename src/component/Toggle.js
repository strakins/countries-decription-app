import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'

const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    const changeTheme = () => {
      document.body.classList.toggle("dark")
      setDarkMode(!darkMode)
    }
  
    return (
      <>
        <button onClick={changeTheme}> {darkMode ? < FaSun className='text-yellow-300' /> : < FaMoon className='text-gray-900'/>}</button>
      </>
    )
}

export default Toggle