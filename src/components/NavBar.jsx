//CSS
import styles from './NavBar.module.css';

//rotas
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>
        Mini <span>BLOG</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar