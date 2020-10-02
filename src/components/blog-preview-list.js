import React from 'react';

import BlogPreview from './blog-preview';

function BlogPreviewList(props) {
  return (
    <ul className="article-list row">
      {props.businesses.map(business => {
        return (
          <li
            data-type={business.type}
            key={business.urlName}
            className="col-lg-6"
          >
            <BlogPreview business={business} />
          </li>
        );
      })}
    </ul>
  );
}

export default BlogPreviewList;
