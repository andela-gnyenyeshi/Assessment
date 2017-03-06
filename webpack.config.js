import path from 'path';

export default {
  devtool: "inline-source-map",
  entry: [path.resolve(__dirname, 'src/index.js')],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'src')
  },
  modules: {
    loader: [{
      test: /\.js$/, exclude: /node_modules/, loaders: ['babel']
    }]
  }
}