import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setSearch}) => {
  return (
    <nav className='nav'>
      <div className='left-section'>
         <Link to='/'><img className="icon" src='icons/product-icon.png'></img></Link>   
      </div>
      <div className='middle-section'>
        <div>
          <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <input
              className='search-input'
              id = "search"
              type = "text"
              placeholder='Search Task'
              value = {search}
              onChange={(e)=>setSearch(e.target.value)}
              />
          </form>
        </div>
        
      </div>
      
      <div className='right-section'>
        <div><Link className='redirect' to='/'>Home</Link></div>
        <div><Link className='redirect' to='/about'>About</Link></div>
        <div><Link className='redirect' to='/userManual'>User Manual</Link></div>
        
      </div>
      


    </nav>
  )
}

export default Nav