import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className={styles.nav}>
      <Container>
        {/* className={styles.margin} */}
        <div className={styles.nav__wrapper}>
          <div>
            <a href='/'>
              <span className={styles.icon + ' fa fa-tasks'}></span>
            </a>
          </div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/favorite'
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='about'
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
