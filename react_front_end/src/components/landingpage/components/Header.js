import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img className="logo-1" src="img/ggggggggggg.webp" alt="Logo" />
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className="active">Home<br /></Link></li>
                <li><a href="route:\Users\Orange\Desktop\ReactLaravel\react_front_end\src\components\landingpage\components\Header.js">About us</a></li>
                <li><a href="#courses">courses</a></li>
                <li><a href="#Trainers">Trainers</a></li>
                <li><a href="#Events">Events</a></li>
                <li><a href="#Pricing">Pricing</a></li>
                <li className="dropdown">
              <Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li><Link to="#">Dropdown 1</Link></li>
                <li className="dropdown">
                  <Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link to="#">Deep Dropdown 1</Link></li>
                    <li><Link to="#">Deep Dropdown 2</Link></li>
                    <li><Link to="#">Deep Dropdown 3</Link></li>
                    <li><Link to="#">Deep Dropdown 4</Link></li>
                    <li><Link to="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Dropdown 2</Link></li>
                <li><Link to="#">Dropdown 3</Link></li>
                <li><Link to="#">Dropdown 4</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Get Started</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>
    </header>
  );
}
