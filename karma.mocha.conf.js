module.exports = function(config) {
  config.set({
    browsers: [
      'PhantomJS',
      'Chrome'
    ],
    files: [
      {
        pattern: 'tests.mocha.webpack.js',
        watched: false
      },
      {
        pattern: './bower_components/lodash/lodash.js',
        watched: false
      },
      {
        pattern: './bower_components/jquery/dist/jquery.js',
        watched: false
      },
      {
        pattern: './bower_components/semantic-ui/dist/semantic.js',
        watched: false
      },
      {
        pattern: './karma.globals.js',
        watched: true
      }
    ],
    frameworks: [
      'mocha'
    ],
    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to mocha web reporter
        ui: 'tdd'
      }
    },
    preprocessors: {
      'tests.mocha.webpack.js': [
        'webpack'
      ]
    },
    webpack: {
      module: {
        loaders: [
          {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
