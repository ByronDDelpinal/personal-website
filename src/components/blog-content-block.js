import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import { INLINES } from '@contentful/rich-text-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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

const getRichTextContent = jsonContent => {
  // Creates a document from a Contenful Rich Text Field
  const blogPostContent = {
    nodeType: 'document',
    data: {},
    content: jsonContent || [],
  };

  return documentToReactComponents(
    blogPostContent,
    blogPostOptions
  )
}

const BlogContentBlock = props => {
  const { content } = props;

  return (
    <div className="blog-content-block">
      <Img
        backgroundColor={'#f4f8fb'}
        fluid={content.image.fluid}
        objectFit="none"
      />
      <h2>{content.title}</h2>
      <p>{getRichTextContent(content.content.json.content)}</p>
    </div>
  );
}

export default BlogContentBlock;
