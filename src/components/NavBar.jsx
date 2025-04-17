import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href='/'>Home</a>
      </div>
      <div className="flex-none">
        <ul className='menu menu-horizontal px-1'>
          <li><a href='/aboutme'>About Me</a></li>
          <li><a href='/projects'>Projects</a></li>
          <li><a href='/contacts'>Contacts</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar