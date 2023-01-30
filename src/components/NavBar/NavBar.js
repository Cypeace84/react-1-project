import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = (props) => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.margin}>
        <container className={styles.container}>
          <div>
            <a href='/'>
              <span className={styles.icon + ' fa fa-tasks'}></span>
            </a>
          </div>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/favorite'>Favorite</a>
            </li>
            <li>
              <a href='about'>About</a>
            </li>
          </ul>
        </container>
      </Container>
    </nav>
  );
};

export default NavBar;
