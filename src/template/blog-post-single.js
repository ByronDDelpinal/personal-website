import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { Component } from 'react';

import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Layout from '../components/layout';
import BlogContentBlock from '../components/blog-content-block';

const getBlogContent = (blogPost) => {
  const blogPostJSON =
    blogPost && blogPost.content && blogPost.content.raw
      ? JSON.parse(blogPost.content.raw)
      : {};
  const imageReferences =
    blogPost && blogPost.content && blogPost.content.references
      ? blogPost.content.references
      : [];

  const blogPostOptions = getBlogPostOptions(imageReferences);

  return documentToReactComponents(blogPostJSON, blogPostOptions);
};

// Overrides the way we handle the inline hypertext item in a document. This
// adds outbound linking so we can track if traffic is actually going to
// the businesses signing up
const getBlogPostOptions = (imageReferences) => {
  return {
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
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // Get the asset ID from the current node
        const assetID = node.data.target.sys.id;

        // Find the node reference
        const assetFluid = imageReferences.find(
          (imageReference) => imageReference.contentful_id === assetID
        ).fluid;

        return (
          <Img
            backgroundColor={'#f4f8fb'}
            fluid={assetFluid}
            objectFit="none"
          />
        );
      },
    },
  };
};

class BlogPostTemplate extends Component {
  render() {
    const blogPost = this.props.data.contentfulBlogPost;
    const hasContentBlocks =
      blogPost.contentBlocks && blogPost.contentBlocks.length > 0;
    // const relatedBlogPosts = this.props.data.allContentfulBlogPost.nodes;
    // const anyRelatedBlogPosts = relatedBlogPosts.length > 0;

    const disqusConfig = {
      shortname: process.env.GATSBY_DISQUS_NAME,
      config: { identifier: blogPost.urlName, title: blogPost.name },
    };

    // Stops this process if it's external, since we won't have most of what we need.
    if (blogPost.isExternal) {
      return null;
    }

    const blogContent = getBlogContent(blogPost);

    return (
      <Layout selectedPage="writes">
        <Helmet
          title={`${blogPost.name} | Byron Delpinal`}
          meta={[
            {
              name: 'description',
              content: blogPost.contentSummary,
            },
            {
              property: 'og:title',
              content: `${blogPost.name} | Byron Delpinal`,
            },
            {
              property: 'og:description',
              content: blogPost.contentSummary,
            },
            {
              property: 'og:image',
              content: `${blogPost.image.fluid.src}`,
            },
            {
              property: 'og:url',
              content: `https://byron.codes/and-writes-about/${blogPost.urlName}`,
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
              content: `${blogPost.name} | Byron Delpinal`,
            },
            {
              name: 'twitter:image',
              content: `${blogPost.image.fluid.src}`,
            },
          ]}
        />
        <section className="blog-post">
          <h1>{blogPost.name}</h1>
          <div className="entry-media">
            <Img
              backgroundColor={'#f4f8fb'}
              fluid={blogPost.image.fluid}
              objectFit="none"
            />
          </div>
          <div className="post-content">
            {blogContent}
            {hasContentBlocks &&
              blogPost.contentBlocks.map((contentBlock) => (
                <BlogContentBlock content={contentBlock} />
              ))}
          </div>
          {/* Sidebar Stuff Goes Here, need to change back to col-lg-7 col-md-7 */}
          {/* {anyRelatedBlogPosts ? (
                <div className="col-md-4">
                  <div className="sidebar-blk">
                    <h4>Related Posts</h4>
                    <p>
                      While you're here, be sure to check out these other{' '}
                      <span className="category">{blogPost.category}</span>{' '}
                      listings!
                    </p>
                    <ul className="related-business-list">
                      {relatedBlogPosts.map(relatedBlogPost => (
                        <li key={relatedBlogPost.id}>
                          <Link to={relatedBlogPost.urlName}>
                            <Img
                              className="related-image"
                              fluid={relatedBlogPost.image.fluid}
                              objectFit="cover"
                            />
                          </Link>
                          <div class="related-information">
                            <Link to={relatedBlogPost.urlName}>
                              <span>{relatedBlogPost.name}</span>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null} */}
        </section>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query blogPostTemplateQuery($category: String, $urlName: String) {
    contentfulBlogPost(urlName: { eq: $urlName }) {
      category
      content {
        raw
        references {
          contentful_id
          fluid {
            aspectRatio
            sizes
            src
            srcSetWebp
            srcSet
            srcWebp
          }
        }
      }
      contentSummary
      contentBlocks {
        content {
          raw
        }
        id
        image {
          fluid {
            aspectRatio
            sizes
            src
            srcSetWebp
            srcSet
            srcWebp
          }
          title
          description
        }
        title
      }
      id
      image {
        title
        description
        fluid {
          src
          srcSet
          srcSetWebp
          sizes
          srcWebp
          aspectRatio
        }
      }
      name
      urlName
    }

    allContentfulBlogPost(
      filter: { category: { eq: $category }, urlName: { ne: $urlName } }
      limit: 5
    ) {
      nodes {
        image {
          title
          description
          fluid {
            src
            srcSet
            srcSetWebp
            sizes
            srcWebp
            aspectRatio
          }
        }
        name
        urlName
      }
    }
  }
`;
