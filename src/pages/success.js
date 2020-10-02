import Link from 'gatsby-link';
import React, { Component } from 'react';

import Layout from '../components/layout';

export class Sucess extends Component {
  render() {
    return (
      <div className="contactImage">
        <div className="container-contact100">
          <Layout>
            <section className="contact-us pad-70">
              <div className="container text-center">
                <div className="wrap-contact100 ">
                  <h4 className="success-msg ">
                    Thank you! Seriously...We love our local artists, musicians,
                    and businesses and we want to see them all succeed. Please,
                    forward this form to everyone you know that should be listed
                    here!
                  </h4>
                  <div
                    className="col-lg-12 text-center"
                    style={{ marginTop: '20px' }}
                  >
                    <Link to="/" className="backtohome contact100-form-btn">
                      Back To Home
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Sucess;
