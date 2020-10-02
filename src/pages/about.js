import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { Component } from 'react';

import aboutImg from '../images/portrait-outdoors.jpg';
import Layout from '../components/layout';

export class About extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    return (
      <div>
        <Helmet title={siteTitle} />
        <Layout>
          <section className="about-us pad-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="image-container">
                    <img src={aboutImg} alt="about" />
                    <p className="photo-credit">
                      Photo Credit:{' '}
                      <OutboundLink href="https://creativeeye.design/">
                        Creative Eye Designs
                      </OutboundLink>
                    </p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <h4>👈🏼 It me.</h4>
                  <p>
                  Byron Delpinal is a Sr. Consultant & Tech Lead at Sparkbox. Software developer by trade and passion, his focus is to create stable, reliable, and performant web applications. Byron’s experience ranges from building web applications for startups as well as being a lead on enterprise teams releasing software daily to millions of users. He has been recognized for his work both in the office and in his community with a 30 For The Future award by the Greater Akron Chamber of Commerce. Byron enjoys playing and creating music in his spare time, but you can usually find him outside with his wife and two beautiful children.
                  </p>
                  <p>If you're interested, here's some stuff I've done:</p>
                  <ul>
                    <li>
                      <OutboundLink
                        href="https://supportlocalakron.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Support Local Akron
                      </OutboundLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
