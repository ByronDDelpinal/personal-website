import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import BlogPreview from '../components/blog-preview';
import Layout from '../components/layout';

const IndexPage = props => {
  const blogPosts = props.data.allContentfulBlogPost.nodes;
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
              <Link
                to="/and-owns-a-suit"
                className="button">
                <span />
                Here For Business
              </Link>
              <a className="button" href="/">Keeping It Personal</a>
            </div>
          </section>
          <div className="blog-four-up">
            <h2 className="blog-four-up--header">
              #OldManRants
            </h2>
            <div className="blog-four-up--blog-list">
              {blogPosts.map(blogPost => {
                return (
                  <BlogPreview blogPost={blogPost} />
                );
              })}
              <Link
                to="/and-writes"
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
    allContentfulBlogPost(limit: 4) {
      nodes {
        id
        category
        name
        urlName
        isExternal
        publishedDate
        externalUrl
        externalSourceName
        image {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
          }
          description
        }
        contentSummary {
          json
        }
        content {
          content
        }
      }
    }
  }
`;
