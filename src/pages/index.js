import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import BlogPreviewList from '../components/blog-preview-list';
import Header from '../components/header';
import Layout from '../components/layout';

const IndexPage = props => {
  const diyPost = props.data.diyPost.nodes;
  const personalPost = props.data.personalPost.nodes;
  const techPost = props.data.techPost.nodes;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout hideHeader={true}>
      <Helmet title={siteTitle} />
        <div className="indexpage">
          <div className="hero">
            <Header />
            <h1 className="hero--header">👋🏼 Hey, I'm Byron</h1>
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
              Latest Rants 📣
            </h2>
            <BlogPreviewList condensed={true} blogPosts={[techPost[0], personalPost[0], diyPost[0]]} />
            <Link
              to="/and-writes"
              className="button highlighted">
              <span />
              See All
            </Link>
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
    diyPost: allContentfulBlogPost(filter: {category: {eq: "DIY"}}, limit: 1) {
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
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
          description
        }
        contentSummary
        content {
          content
        }
      }
    }
    techPost: allContentfulBlogPost(filter: {category: {eq: "Technical"}}, limit: 1) {
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
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
          description
        }
        contentSummary
        content {
          content
        }
      }
    }
    personalPost: allContentfulBlogPost(filter: {category: {eq: "Personal"}}, limit: 1) {
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
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
          description
        }
        contentSummary
        content {
          content
        }
      }
    }
  }
`;
