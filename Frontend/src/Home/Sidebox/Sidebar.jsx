import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='w-[30%] border-white bg-black'>
        <Search />
        <Users />
        <Logout />
    </div>
  )
}

export default Sidebar