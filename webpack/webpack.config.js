const path = require('path');
const devServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {

  context: __dirname,

  entry: {
    common: '../source/scripts/common.js'
  },

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: './scripts/[name].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.scss', '.css', '.pug', 'gif', 'gif', 'png', 'jpg', 'jpeg'],
    modules: ['node_modules', 'source']
  },

  plugins: [
    new SVGSpritemapPlugin({
          src: path.join(__dirname, '../source/icons/*.svg'),
          prefix: '',
          filename: 'images/sprite.svg',
          svgo: {
              plugins: [{
                  cleanupAttrs: true
              },
                  {
                      removeDoctype: true
                  },
                  {
                      removeXMLProcInst: true
                  },
                  {
                      removeComments: true
                  },
                  {
                      removeMetadata: true
                  },
                  {
                      removeTitle: true
                  },
                  {
                      removeDesc: true
                  },
                  {
                      removeUselessDefs: true
                  },
                  {
                      removeXMLNS: true
                  },
                  {
                      removeEditorsNSData: true
                  },
                  {
                      removeEmptyAttrs: true
                  },
                  {
                      removeHiddenElems: true
                  },
                  {
                      removeEmptyText: true
                  },
                  {
                      removeEmptyContainers: true
                  },
                  {
                      removeViewBox: true
                  },
                  {
                      cleanupEnableBackground: true
                  },
                  {
                      minifyStyles: true
                  },
                  {
                      convertStyleToAttrs: true
                  },
                  {
                      convertColors: true
                  },
                  {
                      convertPathData: true
                  },
                  {
                      convertTransform: true
                  },
                  {
                      removeUnknownsAndDefaults: true
                  },
                  {
                      removeNonInheritableGroupAttrs: true
                  },
                  {
                      removeUselessStrokeAndFill: true
                  },
                  {
                      removeUnusedNS: true
                  },
                  {
                      cleanupIDs: true
                  },
                  {
                      cleanupNumericValues: true
                  },
                  {
                      cleanupListOfValues: true
                  },
                  {
                      moveElemsAttrsToGroup: true
                  },
                  {
                      moveGroupAttrsToElems: true
                  },
                  {
                      collapseGroups: true
                  },
                  {
                      removeRasterImages: true
                  },
                  {
                      mergePaths: true
                  },
                  {
                      convertShapeToPath: true
                  },
                  {
                      sortAttrs: true
                  },
                  {
                      removeDimensions: true
                  },
                  {
                      removeAttrs: true
                  },
                  {
                      removeElementsByAttr: true
                  },
                  {
                      addClassesToSVGElement: true
                  },
                  {
                      addAttributesToSVGElement: true
                  },
                  {
                      removeStyleElement: true
                  },
                  {
                      removeScriptElement: true
                  }
              ]
          }
      }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../source/pages/index.pug',
      inject: false
    })
  ]
};