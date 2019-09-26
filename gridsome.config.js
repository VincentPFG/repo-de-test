// Generated by CoffeeScript 2.4.1
(function() {
  module.exports = {
    siteName: 'Gridsome',
    plugins: [
      {
        use: 'gridsome-plugin-pug'
      },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'blog/**/*.md',
          typeName: 'Post'
        }
      }
    ],
    chainWebpack: function(config) {
      return config.module.rule('coffee').test(/\.coffee$/).use('coffee-loader').loader('coffee-loader');
    },
    transformers: {
      remark: {}
    }
  };

}).call(this);