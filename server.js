import express from 'express';
import path from 'path';
import webpackConfig from './webpack.config';
import webpack from 'webpack';

let compiler = webpack(webpackConfig);

const app = express();
const port = 5050;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  hot: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src/index.html'));
})

app.listen(port, (err) => {
  err ? console.log('Problem starting the app') : console.log('App is running on port ' + port);
});