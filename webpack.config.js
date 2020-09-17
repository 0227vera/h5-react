/* eslint-env node */

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CSSSplitWebpackPlugin = require("css-split-webpack-plugin").default
const merge = require("webpack-merge")
const devProxy = require("./devProxy")
const postcssOpts = require("./postcss.config")
const buildNumber = process.env.BUILD_NUMBER || "snapshot"
const version = process.env.version || "latest"

const buildPath = "build"
const prefix = "/reimbursement-mobile/"

module.exports = function (env) {
  let config = {
    entry: {
      shim: ["babel-polyfill", "es6-shim", "promise-polyfill"],
      react: ["react", "react-dom", "prop-types", "react-router-dom"],
      index: "./src/index",
    },
    output: {
      filename: "js/[name].[hash:7].js",
      path: path.resolve("build/"),
      // 这个地方的地址需要需要做成配置的
      publicPath: env.dev
        ? prefix
        : "https://misc.sogou-inc.com/app/{{productionAddress}}" +
          version +
          "/",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [/src/, /node_modules\/dadify/],
          use: "babel-loader",
        },
        {
          test: /\.less$/i,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  localIdentName: "[name]__[local]__[hash:base64:5]",
                },
              },
              {
                loader: "postcss-loader",
                options: postcssOpts,
              },
              "less-loader",
            ],
          }),
        },
        {
          test: /\.css$/i,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true,
                },
              },
              {
                loader: "postcss-loader",
                options: postcssOpts,
              },
            ],
          }),
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 100,
                name: "img/[name].[hash:7].[ext]",
              },
            },
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                name: "font/[name].[hash:7].[ext]",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".less"],
    },
    plugins: [
      new ExtractTextPlugin("css/[name].[chunkhash:7].css"),
      new CSSSplitWebpackPlugin({
        size: 4000,
        filename: "css/[name]-[part].[ext]",
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: ["shim", "react", "vendor"],
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "runtime",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new webpack.DefinePlugin({
        webapckEnv: '"' + (env.prod ? "prod" : "test") + '"',
        global: "window",
      }),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    ],
  }

  if (env.dev) {
    config = merge(config, {
      devtool: "#eval-source-map",
      devServer: {
        host: "0.0.0.0",
        port: 2222,
        https: false,
        historyApiFallback: {
          index: prefix,
        },
        disableHostCheck: true,
        contentBase: path.resolve(__dirname, "div"),
        proxy: devProxy,
      },
    })
  } else {
    config = merge(config, {
      plugins: [
        new CleanWebpackPlugin([buildPath]),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
        }),
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("production"),
          },
        }),
      ],
    })
  }

  return config
}
