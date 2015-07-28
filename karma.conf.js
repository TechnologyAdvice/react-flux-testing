module.exports = function(config) {
  config.set({
    browsers: [
      'PhantomJS',
      'Chrome',
    ],
    files: [
      {
        pattern: 'tests.webpack.js',
        watched: false,
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
      'jasmine',
    ],
    preprocessors: {
      'tests.webpack.js': [
        'webpack',
      ],
    },
    reporters: [
      'dots',
    ],
    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
