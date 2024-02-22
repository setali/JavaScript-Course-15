const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // table.css , table.CSS, table.Css
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i, // sass scss
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        type: 'asset/resource'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}

module.exports = (env, { mode }) => {
  if (mode === 'production') {
    config.optimization = {
      minimizer: [`...`, new CssMinimizerPlugin()]
    }
    config.stats = 'verbose'
  } else if (mode === 'development') {
    config.devServer = {
      static: {
        directory: path.join(__dirname, 'public')
      },
      compress: false,
      port: 3000,
      client: {
        overlay: false
      },
      open: true
    }
    config.stats = 'minimal'
  }

  return config
}
