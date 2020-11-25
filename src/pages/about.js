import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import BackStory from '../components/backstory';
import FunFacts from '../components/fun-facts';

import aboutImg from '../images/portrait-outdoors.jpg';
import Layout from '../components/layout';

const About = props => {
  const siteTitle = props.data.site.siteMetadata.title;
  return (
    <div>
      <Helmet title={siteTitle} />
      <Layout selectedPage='about'>
        <section className="aboutpage">
          <div className="aboutpage--top-section">
            <div className="image-container aboutpage--main-image">
              <img src={aboutImg} alt="photo of Byron outdoors with a suit jacket on" />
              <p className="photo-credit">
                Photo Credit:{' '}
                <OutboundLink href="https://creativeeye.design/">
                  Creative Eye Designs
                </OutboundLink>
              </p>
            </div>
            <div className="aboutpage--top-info">
              <h2 className="aboutpage--header"><span class="pointer-left">👈🏼</span><span class="pointer-up">👆🏼</span> It me.</h2>
              <p>
              Byron Delpinal is a Sr. Consultant & Tech Lead at Sparkbox. Software developer by trade and passion, his focus is to create stable, reliable, and performant web applications. Byron’s experience ranges from building web applications for startups as well as being a lead on enterprise teams releasing software daily to millions of users. He has been recognized for his work both in the office and in his community with a 30 For The Future award by the Greater Akron Chamber of Commerce. Byron enjoys playing and creating music in his spare time, but you can usually find him outside with his wife and two beautiful children.
              </p>
            </div>
          </div>
          { // <FunFacts />
          }
          <BackStory />
        </section>
      </Layout>
    </div>
  );
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
