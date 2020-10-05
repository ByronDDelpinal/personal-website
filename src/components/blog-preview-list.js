import React from 'react';

import BlogPreview from './blog-preview';

function BlogPreviewList(props) {
  return (
    <ul className="article-list row">
      {props.blogPosts.map(blogPost => {
        return (
          <li
            data-type={blogPost.type}
            key={blogPost.urlName}
            className="col-lg-6"
          >
            <BlogPreview blogPost={blogPost} />
          </li>
        );
      })}
    </ul>
  );
}

export default BlogPreviewList;
