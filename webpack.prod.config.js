const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              ['react-remove-properties', { properties: ['data-test'] }]
            ]
          }
        }]
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  plugins: [
    new ESLintPlugin()
  ],
  devtool: 'source-map'
}
