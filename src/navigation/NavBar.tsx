import { memo } from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/weather">Weather</NavLink>
        </li>

        <li>
          <NavLink to="/todo">TODO List</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default memo(NavBar)
