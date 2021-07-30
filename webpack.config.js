const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const ImageMinimizerPlugin = require ('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require("svgo");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
  entry: {
    main: path.resolve (__dirname, './src/scripts/index.js'),
  },
  output: {
    path: path.resolve (__dirname, './build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'Everypay',
      template: path.resolve (__dirname, './src/pug/index.pug'),
      filename: 'index.html',
    }),
    new ImageMinimizerPlugin ({
      minimizerOptions: {
        plugins: [
          ['gifsicle', {interlaced: true}],
          ['jpegtran', {progressive: true}],
          ['optipng', {optimizationLevel: 5}],         
          [
            'svgo',
            {
              plugins: extendDefaultPlugins ([
                {
                  name: 'removeViewBox',
                  active: false,
                },
                {
                  name: 'addAttributesToSVGElement',
                  params: {
                    attributes: [{xmlns: 'http://www.w3.org/2000/svg'}],
                  },
                },
              ]),
            },
          ],
        ],
      },
    }),
  ],
};
