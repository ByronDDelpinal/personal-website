import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

// The form on this page works because it's deployed to Netlify and they
// do some magic around it that makes it work. If you're not deploying there,
// you may need to handle the form submit on your own.
const Contact = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <div className="contact-page">
      <Helmet title={siteTitle} />
      <Layout selectedPage="contact">
        <section className="contact-us">
          <div className="wrap-contact">
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
                <h5>
                  Say Hey{' '}
                  <span aria-label="mailbox with letter in it" role="img">
                    📬
                  </span>
                </h5>
                <p>
                  Whether you're looking to catch up over coffee, talk about
                  tech, have a jam session, or book me for a software contract,
                  I'd love to chat!
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
              <div className="actions">
                <input
                  type="submit"
                  value="Send"
                  className="button highlighted"
                />
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </div>
  );
};

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
