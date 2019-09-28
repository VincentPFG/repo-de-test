// Generated by CoffeeScript 2.4.1
(function() {
  module.exports = {
    siteName: 'Gridsome',
    plugins: [
      {
        use: 'gridsome-plugin-pug'
      },
      {
        // 	use: '@gridsome/source-filesystem'
        // 	options:
        // 		path: 'blog/**/*.md'
        // 		typeName: 'Post'
        // ,
        use: '@gridsome/source-filesystem',
        options: {
          path: 'posts/**/*.md',
          typeName: 'Post'
        }
      },
      {
        use: 'gridsome-plugin-netlify-cms'
      }
    ],
    chainWebpack: function(config) {
      return config.module.rule('coffee').test(/\.coffee$/).use('coffee-loader').loader('coffee-loader');
    },
    transformers: {
      remark: {
        externalLinksTarget: '_blank',
        externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        anchorClassName: 'icon icon-link',
        plugins: []
      }
    }
  };

}).call(this);
