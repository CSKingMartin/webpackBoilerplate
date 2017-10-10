const path = require('path');
const webpack = require('webpack');

module.exports = {
	//entry point: application starts exe and webpack starts the bundle
  devtool: 'source-map',
  entry: {
    'app': [
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  //output options related to how/where webpack emits
  output: {
    path: path.resolve(__dirname, 'dist'), //destination directory
    filename: 'bundle.js' //name of file
  },
  devServer: {
  	contentBase: path.resolve(__dirname, 'dist'), //static file location
  	hot: true //hot module replacement
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
    })
  ],
  // configuration for modules
  module: {
    rules: [
      // for js or jsx files...
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      // for css files...
      { test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: { importLoaders: 1 } 
          },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@Actions': path.resolve(__dirname, 'src/actions/'),
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Containers': path.resolve(__dirname, 'src/containers/'),
      '@Reducers': path.resolve(__dirname, 'src/reducers/'),
      '@Tags': path.resolve(__dirname, 'src/tags/'),
    }
  }
}
