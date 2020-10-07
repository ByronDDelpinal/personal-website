const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulBlogPost {
        nodes {
          category
          isExternal
          urlName
        }
      }
    }
  `).then(result => {
    result.data.allContentfulBlogPost.nodes.forEach(blogPost => {
      if (!blogPost.isExternal) {
        createPage({
          path: `/and-writes-about/${blogPost.urlName}`,
          component: path.resolve(`./src/template/blog-post-single.js`),
          context: {
            category: blogPost.category,
            urlName: blogPost.urlName
            // Data passed to context is available
            // in page queries as GraphQL variables.
          },
        })
      }
    })
  })
}
