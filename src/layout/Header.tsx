import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo/yummio.svg';

const Header: React.FC = () => {
  return (
    <nav className='cyan darken-2'>
      <div className='nav-wrapper'>
        <Link
          to='/'
          className='brand-logo'
        >
          <img
            src={logo}
            alt='Логотип сайта'
            className='logo-image'
          />
        </Link>
        <ul
          id='nav-mobile'
          className='right hide-on-med-and-down'
        >
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href='https://github.com/iamgromov/yummio'
              rel='noreferrer'
              target='_blank'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
