import React from 'react';

import BlogPreview from './blog-preview';
import BlogPreviewCondensed from './blog-preview-condensed';

function BlogPreviewList(props) {
  return (
    <ul className="blog-preview-list">
      {props.blogPosts.map(blogPost => {
        return (
          props.condensed
            ? <BlogPreviewCondensed blogPost={blogPost} withTags={props.withTags}/>
            : <BlogPreview blogPost={blogPost} withTags={props.withTags}/>
        );
      })}
    </ul>
  );
}

export default BlogPreviewList;
