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

  return (
    <li className="blog-preview condensed" key={blogPost.urlName}>
      {blogPost.isExternal
        ?
          <OutboundLink
            className="blog-preview--image-link"
            href={blogPost.externalUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Img
              backgroundColor={'#f4f8fb'}
              className="blog-preview--image"
              fluid={blogPost.image.fluid}
            />
          </OutboundLink>
        :
          <Link
            className="blog-preview--image-link"
            to={`/and-writes-about/${blogPost.urlName}`}
          >
            <Img
              backgroundColor={'#f4f8fb'}
              className="blog-preview--image"
              fluid={blogPost.image.fluid}
            />
          </Link>
      }
      <h2 className="blog-preview--title">
        {blogPost.isExternal
          ?
            <OutboundLink
              href={blogPost.externalUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {blogPost.name > MAX_LENGTH_TITLE
                ? blogPost.name
                : blogPost.name.substring(0, MAX_LENGTH_TITLE)
              }
            </OutboundLink>
          :
            <Link
              className="blog-preview--image-link"
              to={`/and-writes-about/${blogPost.urlName}`}
            >
              {blogPost.name > MAX_LENGTH_TITLE
                ? blogPost.name
                : blogPost.name.substring(0, MAX_LENGTH_TITLE)
              }
            </Link>
        }
      </h2>
    </li>
  );
}

export default BlogPreview;
