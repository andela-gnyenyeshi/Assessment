import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src/index.js'), './styles/style.css', './node_modules/materialize-css/bin/materialize.css', './node_modules/materialize-css/bin/materialize.js'],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'src')
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.(eof|ttf|woff2|woff|eot|)$/, loaders: ['url']}
    ]
  }
}