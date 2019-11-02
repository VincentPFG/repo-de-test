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
    },
    configureWebpack: function(config) {
      var i, j, len, ref, rule;
      ref = config.module.rules;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        rule = ref[i];
        if (String(rule.test) === String(/\.sass$/)) {
          config.module.rules[i] = {
            test: /\.sass$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          };
        }
      }
      return config;
    }
  };

}).call(this);
