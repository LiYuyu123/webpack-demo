const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');



module.exports={
    entry: "./src/index.js", 
    output: {
        filename: "[name].[contenthash].js"
    },
    devServer: {
        contentBase: './dist',
      },
    plugins: [
      new HtmlWebpackPlugin({
        title:'杰杰',
        template:'src/assets/index.html' //在我给你的模板里生成
    }),
],
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    },
    {
      test: /\.styl$/,
      loader: ["style-loader", "css-loader", "stylus-loader"]
    },
    {
      test: /\.less$/,
      loader: ["style-loader", "css-loader", "less-loader"]
    },
    {
      test: /\.scss$/i,
      use: [
        // 将 JS 字符串生成为 style 节点
        'style-loader',
        // 将 CSS 转化成 CommonJS 模块
        'css-loader',
        // 将 Sass 编译成 CSS
        {
          loader: "sass-loader",
          options: {
            implementation: require("dart-sass")
          }
        }
      ],
    },
  ],
},
};






