import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import { INLINES } from '@contentful/rich-text-types';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import Share from './Share';

const BlogPreview = props => {
  const MAX_LENGTH_TITLE = 80;
  const { business } = props;

  // Creates a document from a Contenful Rich Text Field
  const businessSupportSummary = {
    nodeType: 'document',
    data: {},
    content: business.supportSummary
      ? business.supportSummary.json.content
      : [],
  };

  // Overrides the way we handle the inline hypertext item in a document. This
  // adds outbound linking so we can track if traffic is actually going to
  // the businesses signing up
  const businessSupportSummaryOptions = {
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
    <article className="blog-listing" key={business.urlName}>
      <div className="entry-meta-content">
        <div className="entry-media">
          <Link to={business.urlName}>
            <Img fluid={business.image.fluid} backgroundColor={'#f4f8fb'} />
          </Link>
        </div>
        <h2 className="entry-title">
          <Link to={business.urlName}>
            {' '}
            {business.name > MAX_LENGTH_TITLE
              ? business.name
              : business.name.substring(0, MAX_LENGTH_TITLE)}{' '}
          </Link>
        </h2>
        <p className="business-type">{business.type}</p>
        <div className="entry-content">
          {documentToReactComponents(
            businessSupportSummary,
            businessSupportSummaryOptions
          )}
        </div>
      </div>

      <div className="entry-content-bottom">
        <Share
          socialConfig={{
            config: {
              url: `https://supportlocalakron.com/${business.urlName}`,
              quote:
                `I'm supporting ${business.name} because I think they're awesome and you should too! Find out how with #SupportLocalAkron`,
              hashtag: 'SupportLocalAkron',
              title: `Support ${business.name} During The COVID-19 Pandemic`,
            },
            isMinimal: true
          }}
        />
        <Link to={business.urlName} className="entry-read-more">
          <span />
          Support
        </Link>
      </div>
    </article>
  );
}

export default BlogPreview;
