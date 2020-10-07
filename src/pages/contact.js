import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/layout';

// The form on this page works because it's deployed to Netlify and they
// do some magic around it that makes it work. If you're not deploying there,
// you may need to handle the form submit on your own.
const Contact = props => {
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <div className="container-contact100">
      <Helmet title={siteTitle} />
      <Layout selectedPage='contact'>
        <section className="contact-us pad-70">
          <div className="container">
            <div className="col-lg-12">
              <div className="wrap-contact100">
                <form
                  name="contact"
                  method="post"
                  content-type="multipart/form-data"
                  data-netlify="true"
                  className="contact-form"
                  data-netlify-honeypot="bot-field"
                  action="/success"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div>
                    <h5>Say Hey 📬</h5>
                    <p>
                      Whether you're looking to catch up over coffee, talk about tech, have a jam session, or book me for a software contract, I'd love to chat!
                    </p>
                  </div>
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input100"
                      required
                    />
                    <span class="focus-input100"></span>
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="input100"
                      required
                    />
                    <span class="focus-input100"></span>
                  </div>
                  <div className="field">
                    <label htmlFor="story">What's up?</label>
                    <textarea name="story" id="story" required></textarea>
                  </div>
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        value="Send"
                        className="button highlighted"
                      />
                    </li>
                    <li>
                      <input
                        type="reset"
                        value="Clear"
                        className="button"
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
