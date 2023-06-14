import React from 'react'
import Login from './Login'

function Dashboard() {
  return (
    <div>
        <h3 id="title">CRUD Dashboard</h3><br/>
        {/* Different Pages for user, superuser, admin  */}

        {/* Route to login page from dashboard */}
        <Login />
    </div>
  )
}

export default Dashboard