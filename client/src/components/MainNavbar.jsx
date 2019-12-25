import React from 'react'
import api from '../api'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  function handleLogoutClick(e) {
    api.logout()
  }
  return (
    <nav className="nav-container">
      <div>
        <h1 className="title">Dealer Mine</h1>
      </div>

      <div className="navs">
        <NavLink to="/" exact>
          {' '}
          Home
        </NavLink>
        <NavLink to="/projects">Dealers</NavLink>
        {/* {api.isLoggedIn() && <NavLink to="/add-project">Add Project</NavLink>} */}
        {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
        {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
        {api.isLoggedIn() && (
          <Link to="/" onClick={handleLogoutClick}>
            Logout
          </Link>
        )}
      </div>
    </nav>
  )
}

export default withRouter(MainNavbar)
