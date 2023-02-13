import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        {/* <Link to="/"> */}
          <h1 className="header__logo-text">3E-NVENTORY</h1>
        {/* </Link> */}
        <nav className="nav">
          {/* <Link to="/:storeId" className="nav__link"> */}
            <p className="nav__link-text">Store1</p>
          {/* </Link> */}
          {/* <Link to="/:storeId" className="nav__link"> */}
            <p className="nav__link-text">Store2</p>
          {/* </Link> */}
          {/* <Link to="/:storeId" className="nav__link"> */}
            <p className="nav__link-text">Store3</p>
          {/* </Link> */}
        </nav>
      </section>
    </header>
  );
}
