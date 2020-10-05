import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import { INLINES } from '@contentful/rich-text-types';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import Share from './share';

const BlogPreview = props => {
  const MAX_LENGTH_TITLE = 80;
  const { blogPost } = props;

  console.log(blogPost);

  return (
    <article className="blog-listing" key={blogPost.urlName}>
      <div className="entry-meta-content">
        <div className="entry-media">
          {blogPost.isExternal
            ?
              <OutboundLink
                href={blogPost.externalUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Img fluid={blogPost.image.fluid} backgroundColor={'#f4f8fb'} />
              </OutboundLink>
            :
              <Link to={`/and-writes/${blogPost.urlName}`}>
                <Img fluid={blogPost.image.fluid} backgroundColor={'#f4f8fb'} />
              </Link>
          }
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
          {blogPost.contentSummary}
        </div>
      </div>
    </article>
  );
}

export default BlogPreview;
