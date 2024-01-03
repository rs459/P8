import { Link, NavLink } from "react-router-dom";

import s from "./Header.module.scss";
import Logo, { LogoColor } from "../../components/Logo";

export default function Header() {
  return (
    <header className={s.mainHeader}>
      <Link to="/" className={s.mainHeaderLogo}>
        <Logo color={LogoColor.RED} />
      </Link>
      <nav className={s.mainHeaderNav}>
        <ul>
          <li className={s.mainHeaderNavItem}>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className={s.mainHeaderNavItem}>
            <NavLink to="/about">À propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
