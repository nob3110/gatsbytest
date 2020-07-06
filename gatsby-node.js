const path = require('path')

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