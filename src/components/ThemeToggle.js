import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';


const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
  return (
    <div>
            <button onClick={toggleTheme}>Toggle the theme</button>
        
    </div>
  )
}

export default ThemeToggle

