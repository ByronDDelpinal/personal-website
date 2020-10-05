import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { Component } from 'react';

import { INLINES } from '@contentful/rich-text-types';
import Layout from '../components/layout';
import websiteLogo from '../images/website-logo.png';

class BlogPostTemplate extends Component {
  render() {
    const blogPost = this.props.data.contentfulBlogPost;
    const relatedBlogPosts = this.props.data.allContentfulBlogPost.nodes;
    const anyRelatedBlogPosts = relatedBlogPosts.length > 0;

    // Creates a document from a Contenful Rich Text Field
    const blogPostContent = {
      nodeType: 'document',
      data: {},
      content: blogPost.content.json.content || [],
    };

    // Overrides the way we handle the inline hypertext item in a document. This
    // adds outbound linking so we can track if traffic is actually going to
    // the businesses signing up
    const blogPostOptions = {
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => (
          <OutboundLink
            href={node.data.uri}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </OutboundLink>
        ),
      },
    };

    return (
      <Layout>
        <Helmet
          title={`${blogPost.name} | Byron Delpinal`}
          meta={[
            {
              name: 'description',
              content: blogPost.contentSummary,
            },
            {
              property: 'og:title',
              content: `${blogPost.name} | Byron Delpinal`,
            },
            {
              property: 'og:description',
              content: blogPost.contentSummary,
            },
            {
              property: 'og:image',
              content: `${blogPost.image.fluid.src}`,
            },
            {
              property: 'og:url',
              content: `https://byron.codes/and-writes/${blogPost.urlName}`,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:title',
              content: `${blogPost.name} | Byron Delpinal`,
            },
            {
              name: 'twitter:image',
              content: `${blogPost.image.fluid.src}`,
            },
          ]}
        />

        <div className="inner-blog-post pad-40">
          <div className="container">
            <div className="row">
              <div className="post-content top-content">
                <div class="post-left-content">
                  <h2 className="section-headline"> {blogPost.name} </h2>
                  <p className="business-type">{blogPost.type}</p>
                </div>
              </div>
              {/* if we have related blog posts, make room for the sidebar */}
              <div
                className={`${anyRelatedBlogPosts ? 'col-md-8' : 'col-md-12'}`}
              >
                <div className="entry-media">
                  <Img
                    backgroundColor={'#f4f8fb'}
                    fluid={blogPost.image.fluid}
                    objectFit="none"
                  />
                </div>
                <div className="post-content">
                  <div className="business-content">
                    <h3>TL;DR</h3>
                    <p>{blogPost.contentSummary}</p>
                  </div>
                  <div className="business-content">
                    <h3>The Content</h3>
                    {documentToReactComponents(
                      blogPostContent,
                      blogPostOptions
                    )}
                  </div>
                </div>
              </div>
              {/* Sidebar Stuff Goes Here, need to change back to col-lg-7 col-md-7 */}
              {anyRelatedBlogPosts ? (
                <div className="col-md-4">
                  <div className="sidebar-blk">
                    <h4>Related Posts</h4>
                    <p>
                      While you're here, be sure to check out these other{' '}
                      <span className="category">{blogPost.category}</span>{' '}
                      listings!
                    </p>
                    <ul className="related-business-list">
                      {relatedBlogPosts.map(relatedBlogPost => (
                        <li key={relatedBlogPost.id}>
                          <Link to={relatedBlogPost.urlName}>
                            <Img
                              className="related-image"
                              fluid={relatedBlogPost.image.fluid}
                              objectFit="cover"
                            />
                          </Link>
                          <div class="related-information">
                            <Link to={relatedBlogPost.urlName}>
                              <span>{relatedBlogPost.name}</span>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query blogPostTemplateQuery($category: String, $urlName: String) {
    contentfulBlogPost(urlName: { eq: $urlName }) {
      category
      content {
        json
      }
      contentSummary
      id
      image {
        title
        description
        fluid {
          src
          srcSet
          srcSetWebp
          sizes
          srcWebp
          aspectRatio
        }
      }
      name
      urlName
    }

    allContentfulBlogPost(
      filter: { category: { eq: $category }, urlName: { ne: $urlName } }
      limit: 5
    ) {
      nodes {
        image {
          title
          description
          fluid {
            src
            srcSet
            srcSetWebp
            sizes
            srcWebp
            aspectRatio
          }
        }
        name
        urlName
      }
    }
  }
`;
