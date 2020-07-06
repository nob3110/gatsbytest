const path = require('path')

// exports.createPages = async ({ graphql, actions }) => {

//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       allMicrocmsInterviews {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//       allMicrocmsOffers {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     throw result.errors
//   }

//   result.data.allMicrocmsInterviews.edges.forEach(edge => {
//     createPage({
//       path: `/interviews/${edge.node.id}`,
//       component: path.resolve('./src/templates/interview.js'),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })

//   result.data.allMicrocmsOffers.edges.forEach(edge => {
//     createPage({
//       path: `/offers/${edge.node.id}`,
//       component: path.resolve('./src/templates/offer.js'),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
// }


// importを相対パス対応させる
exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        images: path.resolve(__dirname, 'src/images'),
        pages: path.resolve(__dirname, 'src/pages'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        functions: path.resolve(__dirname, 'src/functions'),
        templates: path.resolve(__dirname, 'src/templates'),
      },
    },
  });
};