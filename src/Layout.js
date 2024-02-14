import React from 'react'
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({search,setSearch}) => {
  return (
    <div className="App">
      <Nav search={search} setSearch={setSearch}/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Layout