import Link from 'gatsby-link';
import React, { Component } from 'react';

import logoImg from '../images/face.png';

export class Header extends Component {
  render() {
    return (
      <section className="site-header">
        <Link to="/" className="brand-logo">
          <img src={logoImg} alt="brand logo" />
        </Link>
        <nav id="main-menu" className="text-right">
          <ul>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/business/">Local Listings</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Header;
