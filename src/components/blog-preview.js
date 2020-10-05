import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import { INLINES } from '@contentful/rich-text-types';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import Share from './Share';

const BlogPreview = props => {
  const MAX_LENGTH_TITLE = 80;
  const { blogPost } = props;

  // Creates a document from a Contenful Rich Text Field
  const blogSummary = {
    nodeType: 'document',
    data: {},
    content: blogPost.contentSummary.json.content || [],
  };

  // Overrides the way we handle the inline hypertext item in a document. This
  // adds outbound linking so we can track if traffic is actually going to
  // the businesses signing up
  const blogSummaryOptions = {
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
    <article className="blog-listing" key={blogPost.urlName}>
      <div className="entry-meta-content">
        <div className="entry-media">
          <Link to={blogPost.urlName}>
            <Img fluid={blogPost.image.fluid} backgroundColor={'#f4f8fb'} />
          </Link>
        </div>
        <h2 className="entry-title">
          <Link to={blogPost.urlName}>
            {' '}
            {blogPost.name > MAX_LENGTH_TITLE
              ? blogPost.name
              : blogPost.name.substring(0, MAX_LENGTH_TITLE)}{' '}
          </Link>
        </h2>
        <p className="business-type">{blogPost.type}</p>
        <div className="entry-content">
          {documentToReactComponents(
            blogSummary,
            blogSummaryOptions
          )}
        </div>
      </div>
    </article>
  );
}

export default BlogPreview;
