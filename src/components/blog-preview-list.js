import React from 'react';

import BlogPreview from './blog-preview';
import BlogPreviewCondensed from './blog-preview-condensed';

function BlogPreviewList(props) {
  return (
    <ul className="blog-preview-list row">
      {props.blogPosts.map(blogPost => {
        return (
          props.condensed
            ? <BlogPreviewCondensed blogPost={blogPost} />
            : <BlogPreview blogPost={blogPost} />
        );
      })}
    </ul>
  );
}

export default BlogPreviewList;
