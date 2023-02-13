import { Link } from "react-router-dom";
import "./Header.scss";


export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <Link to="/" className="nav__link">
          <h1 className="header__logo-text">3E-NVENTORY</h1>
        </Link>
        <nav className="nav">
          <Link to="/store/2922c286-16cd-4d43-ab98-c79f698aeab0" className="nav__link">
            <p className="nav__link-text">Danforth</p>
          </Link>
          <Link to="/store/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9" className="nav__link">
            <p className="nav__link-text">Leaside</p>
          </Link>
          <Link to="/store/90ac3319-70d1-4a51-b91d-ba6c2464408c" className="nav__link">
            <p className="nav__link-text">Ossington</p>
          </Link>
        </nav>
      </section>
    </header>
  );
}
