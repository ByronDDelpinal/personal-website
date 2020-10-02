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

class BusinessTemplate extends Component {
  render() {
    const business = this.props.data.contentfulBusinesses;
    const relatedBusinesses = this.props.data.allContentfulBusinesses.nodes;
    const anyRelatedBusinesses = relatedBusinesses.length > 0;

    // Creates a document from a Contenful Rich Text Field
    const businessStory = {
      nodeType: 'document',
      data: {},
      content: business.story ? business.story.json.content : [],
    };

    // Creates a document from a Contenful Rich Text Field
    const businessSupportFull = {
      nodeType: 'document',
      data: {},
      content: business.supportFull ? business.supportFull.json.content : [],
    };

    // Overrides the way we handle the inline hypertext item in a document. This
    // adds outbound linking so we can track if traffic is actually going to
    // the businesses signing up
    const businessSupportOptions = {
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
          title={`Support ${business.name} during the COVID-19 pandemic!`}
          meta={[
            {
              name: 'description',
              content: `Our local businesses are the heart and soul of our communities. Now that they've been affected by the COVID-19 pandemic it's time to show up and support them. See how to support ${business.name} here!`,
            },
            {
              name: 'keywords',
              content:
                'local business, shop local, akron, ohio, small business, entrepreneur',
            },
            {
              property: 'og:title',
              content: `Support ${business.name} during the COVID-19 pandemic!`,
            },
            {
              property: 'og:description',
              content: `Our local businesses are the heart and soul of our communities. Now that they've been affected by the COVID-19 pandemic it's time to show up and support them. See how to support ${business.name} here!`,
            },
            {
              property: 'og:image',
              content: `${business.image.fluid.src}`,
            },
            {
              property: 'og:url',
              content: `https://supportlocalakron.com/${business.urlName}`,
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
              content: `Support ${business.name} during the COVID-19 pandemic!`,
            },
            {
              name: 'twitter:image',
              content: `${business.image.fluid.src}`,
            },
          ]}
        />

        <div className="inner-blog-post pad-40">
          <div className="container">
            <div className="row">
              <div className="post-content top-content">
                <div class="post-left-content">
                  <h2 className="section-headline"> {business.name} </h2>
                  <p className="business-type">{business.type}</p>
                </div>
                <p className="business-type website">
                  <img
                    className="website-logo"
                    src={websiteLogo}
                    alt="laptop computer"
                  />
                  <OutboundLink
                    className="business-website"
                    href={business.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our Website
                  </OutboundLink>
                </p>
              </div>
              {/* if we have related businesses, make room for the sidebar */}
              <div
                className={`${anyRelatedBusinesses ? 'col-md-8' : 'col-md-12'}`}
              >
                <div className="entry-media">
                  <Img
                    backgroundColor={'#f4f8fb'}
                    fluid={business.image.fluid}
                    objectFit="none"
                  />
                </div>
                <div className="post-content">
                  <div className="business-content">
                    <h3>Our Story</h3>
                    {documentToReactComponents(
                      businessStory,
                      businessSupportOptions
                    )}
                  </div>
                  <div className="business-content">
                    <h3>How To Support Us</h3>
                    {documentToReactComponents(
                      businessSupportFull,
                      businessSupportOptions
                    )}
                  </div>
                </div>
              </div>
              {/* Sidebar Stuff Goes Here, need to change back to col-lg-7 col-md-7 */}
              {anyRelatedBusinesses ? (
                <div className="col-md-4">
                  <div className="sidebar-blk">
                    <h4>Related Listings</h4>
                    <p>
                      While you're here, be sure to check out these other{' '}
                      <span className="category">{business.category}</span>{' '}
                      listings!
                    </p>
                    <ul className="related-business-list">
                      {relatedBusinesses.map(relatedBusiness => (
                        <li key={relatedBusiness.id}>
                          <Link to={relatedBusiness.urlName}>
                            <Img
                              className="related-image"
                              fluid={relatedBusiness.image.fluid}
                              objectFit="cover"
                            />
                          </Link>
                          <div class="related-information">
                            <Link to={relatedBusiness.urlName}>
                              <span>{relatedBusiness.name}</span>
                            </Link>
                            {/*<span class="meta">{relatedBusiness.type}</span>*/}
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

export default BusinessTemplate;

export const pageQuery = graphql`
  query businessQuery($category: String, $urlName: String) {
    contentfulBusinesses(urlName: { eq: $urlName }) {
      category
      id
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
      name
      story {
        json
      }
      supportFull {
        json
      }
      type
      urlName
      website
    }

    allContentfulBusinesses(
      filter: { category: { eq: $category }, urlName: { ne: $urlName } }
      limit: 5
    ) {
      nodes {
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
        name
        urlName
      }
    }
  }
`;
