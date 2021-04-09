const path = require("path")
const BrowserSyncPlugin = require("browser-sync-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally')
const WebpackOnBuildPlugin = require('on-build-webpack')
const RemovePlugin = require('remove-files-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin');
const uglifyJS = require("uglify-js")
const webpack = require("webpack")
const fs = require('fs')

module.exports = (env) => {
  let bsConfig = {
    host: 'localhost',
    port: 3000,
    server: {
      baseDir: ['test/out']
    },
    files: ["./**/src/**/*.js", "./**/src/**/*.scss"],
    open: false
  }
  if( process.env && process.env.DEBUG ) {
    console.log("\n\nbsConfig »\n", bsConfig)
  }
  return {
    mode: (env && env.production) ? "production" : "development",
    entry: {
      "scripts": [ path.resolve(__dirname, "./src/scripts/index.js")],
      "styles": [ path.resolve(__dirname, "./src/styles/styles.scss")],
    },
    output: {
      path: path.resolve(__dirname, 'kss-assets'),
      clean: true
    },
    plugins: [
      new RemovePlugin({
        before: {
          include: [
            './dist'
          ]
        }
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new MergeIntoSingleFilePlugin({
        files: {
          'js/scripts.js': [
            path.resolve(__dirname, 'src/scripts/index.js')
          ]
        }
      }),
      new BrowserSyncPlugin(bsConfig)
    ],
    module: {
      rules: [
        {
  				test: /\.scss$/,
  				use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            "css-loader",
  					{
  						loader: "sass-loader",
              options: {
                sassOptions: {
                  outputStyle: (env && env.production) ? "compressed" : "expanded",
                }
              }
  					}
    			]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: '[name].[ext]',
                outputPath: "images/"
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
              publicPath: "../fonts"
            }
          }]
        },
        {
          test: /\.js(x)?$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              }
            },
            'eslint-loader'
          ]
        }
      ]
    }
  }
}
