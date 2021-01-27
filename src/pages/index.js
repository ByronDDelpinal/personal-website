import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import BlogPreviewList from '../components/blog-preview-list';
import Header from '../components/header';
import Layout from '../components/layout';

import heroSoloImage from '../images/header-solo-purple.png'

const IndexPage = (props) => {
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
          <h1 className="hero--header">
            Hey, I'm Byron{' '}
            <span aria-label="hand waving" role="img">
              👋🏼
            </span>
          </h1>
          <h3 className="hero--sub-header">
            I write software and do cool stuff. <br />
            Pull up a chair and stay a while.
          </h3>
          <img className="hero--right" src={heroSoloImage} alt="me in a purple hoodie that reads Everyday Akron" />
        </div>
        <section className="title-with-selections">
          <h3 className="title-with-selections--header">
            Whatcha looking for?
          </h3>
          <div className="selections-container">
            <Link to="/and-owns-a-suit" className="button">
              <span />
              Here For Business
            </Link>
            <a className="button" href="/about">
              Keeping It Personal
            </a>
          </div>
        </section>
        <section className="dark lets-talk">
          <h3 className="small-paragraph">
            I consider myself a community enthusiast and professional
            procrastinator. I've worn many hats and dawned many titles: Software
            Engineer, Husband, Consultant, Teen Dad, Public Speaker, Aspiring
            Woodworker, Adult Child, and Mentor just to name a few. My favorite
            hobby is either spilling drinks or collecting books I may one day
            read. If any of that resonates with you, and you'd like to talk,
            <Link to="/contact"> send me an email</Link>!
          </h3>
          <Link to="/contact" className="button highlighted">
            Let's Talk!
          </Link>
        </section>
        <section className="blog-four-up">
          <h2 className="blog-four-up--header">
            Latest Rants{' '}
            <span aria-label="megaphone" role="img">
              📣
            </span>
          </h2>
          <BlogPreviewList
            condensed={true}
            blogPosts={[techPost[0], personalPost[0], diyPost[0]]}
            withTags={true}
          />
          <Link to="/and-writes" className="button">
            <span />
            See All
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query siteIndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    diyPost: allContentfulBlogPost(
      filter: { category: { eq: "DIY" } }
      limit: 1
    ) {
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
          raw
        }
      }
    }
    techPost: allContentfulBlogPost(
      filter: { category: { eq: "Technical" } }
      limit: 1
    ) {
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
          raw
        }
      }
    }
    personalPost: allContentfulBlogPost(
      filter: { category: { eq: "Personal" } }
      limit: 1
    ) {
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
          raw
        }
      }
    }
  }
`;
