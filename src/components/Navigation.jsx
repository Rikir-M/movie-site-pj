import React from 'react'
import { NavLink } from "react-router-dom";
import "./Style.css"


const Navigation = () => {
  return (
    <div className='navBar'>
      <nav className='flex justify-between'>
        <a href='#' className=' text-3xl font-bold ml-10'>MovieR</a>
        <div className=' mt-2'>
          <NavLink className={"text-lg"} to={"/"}>Home</NavLink>
          <NavLink className={"text-lg ml-20 mr-20"} to={"/discover"}>Discover</NavLink>
          <NavLink className={"text-lg"} to={"/favorites"}>Favorites</NavLink>
        </div>
        <NavLink className={"mr-10 text-lg"} to={"/logIn"}>Log In</NavLink>
      </nav>
    </div>
  )
}

export default Navigation

