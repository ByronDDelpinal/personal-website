import Link from 'gatsby-link';
import React, { Component } from 'react';

import Layout from '../components/layout';

export class Sucess extends Component {
  render() {
    return (
      <div className="contact-page container-contact100">
        <Layout>
          <section className="contact-us">
            <div className="wrap-contact">
              <h4 className="success-msg ">
                You're awesome. I'll be in touch soon!
              </h4>
              <Link to="/" className="button highlighted">
                Back To Home
              </Link>
            </div>
          </section>
        </Layout>
      </div>
    );
  }
}

export default Sucess;
