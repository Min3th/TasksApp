import React, { useEffect } from 'react'
import { useState } from 'react';

const Footer = () => {

  const today = new Date()
  const [dark,setDark] = useState('light');
  const [theme,setTheme] = useState('light');
  const handleDark = (e) => {
    e.preventDefault();
    setDark((initialClass => initialClass === 'light'? 'dark':'light'));
    setTheme((initialClass => initialClass === 'light'? 'dark':'light'))
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme);
  })
  
  return (
    <footer className='footer'>
      <p>Copyright &copy; {today.getFullYear()}</p>
      <div className='toggle'><button className='toggle-button' onClick={handleDark}><img className={dark} src={`icons/${dark}.png`} /></button></div>
      
    </footer>
    
  )
}

export default Footer