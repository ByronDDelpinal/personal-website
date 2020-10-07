import Link from 'gatsby-link';
import React from 'react';

import logoImg from '../images/face.png';

const Header = props => {
  return (
    <section className="site-header">
      <Link to="/" className="brand-logo">
        <img src={logoImg} alt="brand logo" />
      </Link>
      <nav id="main-menu" className="text-right">
        <ul>
          <li>
            <Link
              className={`${props.selectedPage === 'about' ? 'selected' : ''}`}
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${props.selectedPage === 'writes' ? 'selected' : ''}`}
              to="/and-writes-about/"
            >
              Writing
            </Link>
          </li>
          <li>
            <Link
              className={`${props.selectedPage === 'contact' ? 'selected' : ''}`}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
