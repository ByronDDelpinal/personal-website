const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulBlogPost {
        nodes {
          category
          urlName
        }
      }
    }
  `).then(result => {
    result.data.allContentfulBlogPost.nodes.forEach(business => {
      createPage({
        path: `/and-writes/${business.urlName}`,
        component: path.resolve(`./src/template/business-single.js`),
        context: {
          category: business.category,
          urlName: business.urlName
          // Data passed to context is available
          // in page queries as GraphQL variables.
        },
      })
    })
  })
}
