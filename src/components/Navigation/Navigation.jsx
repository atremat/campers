import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <header>
      <p className={css.logo}>Logo</p>

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
    </header>
  );
};
