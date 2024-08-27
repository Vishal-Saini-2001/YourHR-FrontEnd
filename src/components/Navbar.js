import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <center>
        <button onClick={() => navigate('/')}>Add User</button>
        <br/>
        <button onClick={() => navigate('/users')}>Show Users</button>
      </center>
    </div>
  )
}

export default Navbar