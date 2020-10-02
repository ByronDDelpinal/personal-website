import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import BlogPreview from '../components/blog-preview';
import Layout from '../components/layout';

const IndexPage = props => {
  const businesses = props.data.allContentfulBusinesses.nodes;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={siteTitle} />
        <div className="indexpage">
          <div className="hero">
            <h2 className="hero--header">Hey, I'm Byron 👋🏼</h2>
            <h3 className="hero--sub-header">I write software and do cool stuff. <br />Pull up a chair and stay a while.</h3>
          </div>
          <section className="title-with-selections">
            <h3 className="title-with-selections--header">Whatcha looking for?</h3>
            <div className="selections-container">
              <a className="button" href="/">Here For Business</a>
              <a className="button" href="/">Keeping It Personal</a>
            </div>
          </section>
          <div className="blog-four-up">
            <h2 className="blog-four-up--header">
              #OldManRants
            </h2>
            <div className="blog-four-up--blog-list">
              {businesses.map(business => {
                return (
                  <BlogPreview business={business} />
                );
              })}
              <Link
                to="/business"
                className="button highlighted">
                <span />
                See All
              </Link>
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query siteIndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBusinesses(limit: 4) {
      nodes {
        id
        name
        image {
          file {
            url
          }
          fluid(maxWidth: 1800) {
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        supportSummary {
          json
        }
        type
        urlName
        website
      }
    }
  }
`;
