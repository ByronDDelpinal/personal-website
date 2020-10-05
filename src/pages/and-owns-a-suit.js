import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import BlogPreview from '../components/blog-preview';
import Layout from '../components/layout';

const AndOwnsASuitPage = props => {
  const blogPosts = props.data.allContentfulBlogPost.nodes;
  const { bragSheet, company, dayToDay, resume, jobTitle, } = props.data.contentfulBusinessInfo;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={siteTitle} />
        <div className="and-owns-a-suit-page">
          <div className="hero">
            <h2 className="hero--header">✉️ Per My Last Email...</h2>
            <h3 className="hero--sub-header">Just kidding.</h3>
          </div>
          <section className="current-status">
            <p>Let's get straight to the point: If you're looking for a resume, <a href={ resume.file.url } rel="noopener" target="_blank">I got you covered 🕴️</a></p>
            <h2>Current Status</h2>
            <div className="current-status--block">
              <h3>Company:</h3>
              <p>{ company }</p>
            </div>
            <div className="current-status--block">
              <h3>Job Title:</h3>
              <p>{ jobTitle }</p>
            </div>
            <h3>Day-To-Day:</h3> <p>{ dayToDay }</p>

          </section>
          <section className="brag-sheet">
            <h2>Brag Sheet</h2>
            <p>I've had the privelidge to do some great work with some great people. Here are some highlights.</p>
            <ul>
              {bragSheet.map(brag => {
                  return (
                    <div className="brag-sheet--block">
                      <h3>{ brag.title }</h3>
                      <p>{ brag.description }</p>
                    </div>
                  );
                }
              )}
              <li>Architected, presented, and led the move from a static faceting and filtering system to a configurable and dynamic system through refactoring.</li>
              <li>Led the transition out of a monolith to a micro-frontend architecture.</li>
              <li>Mentored many junior and mid-range developers in the office, in the community, and through the Sparkbox Apprenticeship Program.</li>
              <li>Recieved the "30 For The Future" award from the Greater Akron Chamber of Commerce</li>
              <li></li>
            </ul>
          </section>
          <section className="community-involvement">
            <h2>Community Involvement</h2>
            <p>Community is everything to me. My community has given so much to me, and it's my hope to repay that debt many times over.</p>
            <ul>
              <li>Torchbearer's: Board member (1 year) & Elected board officer (2 years)</li>
              <li>KaBoom! Playground Build</li>
              <li>Akron Front End Development Group</li>
            </ul>
          </section>
          <section className="professional-writing">
            <div className="blog-four-up">
              <h2 className="blog-four-up--header">
                Technical Writing
              </h2>
              <p className="blog-four-up--description">Below you'll find articles I've written ranging from in-depth technical explanations to conjectures on managing people.</p>
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
          </section>
          <section className="professional-speaking">
            <h2>Speaking Engagements & Presentations</h2>
          </section>
        </div>
    </Layout>
  );
}

export default AndOwnsASuitPage;

export const query = graphql`
  query AndOwnsASuitPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost(limit: 4) {
      nodes {
        category
        id
        name
        urlName
        content {
          json
        }
        contentSummary {
          json
        }
        image {
          title
          description
          fluid {
            src
            srcSet
            srcSetWebp
            sizes
            srcWebp
            base64
            aspectRatio
            tracedSVG
          }
        }
      }
    }
    contentfulBusinessInfo {
      company
      jobTitle
      dayToDay
      bragSheet {
        description
        title
        id
      }
      resume {
        id
        file {
          url
        }
        description
      }
    }
  }
`;
