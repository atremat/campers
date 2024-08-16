import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import logo from '../../assets/camper.svg';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <span className={css.logo}>
          <img src={logo} alt="Company Logo" width="40" height="40" />
        </span>

        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/catalog" className={buildLinkClass}>
                Catalog
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/favorite" className={buildLinkClass}>
                Favorite
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
