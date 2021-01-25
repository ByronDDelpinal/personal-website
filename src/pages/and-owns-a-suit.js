import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import BlogPreviewList from '../components/blog-preview-list';
import Layout from '../components/layout';

const AndOwnsASuitPage = (props) => {
  const blogPosts = props.data.allContentfulBlogPost.nodes;
  const {
    bragSheet,
    company,
    dayToDay,
    resume,
    jobTitle,
  } = props.data.contentfulBusinessInfo;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout selectedPage="work">
      <Helmet title={siteTitle} />
      <div className="and-owns-a-suit-page">
        <div className="hero">
          <h1 className="hero--header">
            Per My Last Email{' '}
            <span aria-label="envelope" role="img">
              ✉️
            </span>
          </h1>
          <h3 className="hero--sub-header">Just kidding.</h3>
        </div>
        <div class="top-content">
          <section className="current-status">
            <h2 className="top-content--header">Current Status</h2>
            <h3>{jobTitle} at {company}</h3>
            <p>{dayToDay}</p>
            <h3>Where I Thrive</h3>
            <p>
              I thrive when I'm given the autonomy to lead teams through the
              creation of robust features and products. My best talent is acting
              as a conduit between technical and business teams. I have a unique
              sense of emapthy with both sides of this, giving me the ability to
              align both business and technical teams on feature and product
              implementations. Things that I've done that demonstrate this
              clearly:
            </p>
            <ul className="thrive-list">
              <li>
                Prepared for concept sprints by gathering business requirements
                and doing proof-of-concept work to ensure technical feasibility
              </li>
              <li>
                Led concept sprints, explaining technical architecture to the
                team as well as explaining technical capabilities to the
                business
              </li>
              <li>
                Aligned multiple teams on process changes when dealing with
                larger components in order to clarify ownership and governance
                as well as establish quicker iteration patterns in component
                maintenance
              </li>
              <li>
                Greatly increased code quality by shaping large feature
                implementations to be completed through refactoring instead
                of additive complexity
              </li>
            </ul>
            <a
            className="button highlighted resume-link"
            href={resume.file.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            If you're looking for a resume, I've got you covered{' '}
            <span aria-label="business man in suit" role="img">
              🕴️
            </span>
          </a>
          </section>
        </div>
        <section className="dark professional-writing">
          <div className="blog-four-up">
            <h2 className="top-content--header">Technical Writing</h2>
            <BlogPreviewList
              condensed={true}
              blogPosts={blogPosts}
              withTags={false}
            />
            <Link to="/and-writes" className="button highlighted">
              <span />
              See All
            </Link>
          </div>
        </section>
        <div class="top-content">
          <section className="brag-sheet block-list">
            <h2 className="top-content--header">Brag Sheet</h2>
            <p>
              I've had the privelidge to do some great work with some great
              people, both inside and outside of the office. Not everything can
              make it to a resume, but I do believe we should celebrate our
              wins, so I've compiled a list of things that I'm proud of over the
              course of my adult life:
            </p>
            <ul>
              {bragSheet
                .sort((a, b) => new Date(b.year) - new Date(a.year))
                .map((brag) => {
                  return (
                    <li className="block-list--block">
                      <h3 class="title">
                        {brag.title}{' '}
                      </h3>
                      <p className="year">
                        {brag.year ? brag.year.substring(0, 4) : ''}
                        <ul className="category-list">
                          {brag.categories
                            ? brag.categories.map((category) => (
                                <li className={category}>#{category}</li>
                              ))
                            : null}
                        </ul>
                      </p>
                      <p>{brag.description}</p>
                    </li>
                  );
                })}
            </ul>
          </section>
        </div>
        {/* <section className="professional-speaking">
            <h2>Speaking Engagements & Presentations</h2>
          </section> */}
      </div>
    </Layout>
  );
};

export default AndOwnsASuitPage;

export const query = graphql`
  query AndOwnsASuitPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost(filter: { category: { eq: "Technical" } }, limit: 4) {
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
    contentfulBusinessInfo {
      company
      jobTitle
      dayToDay
      bragSheet {
        categories
        description
        id
        title
        year
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
