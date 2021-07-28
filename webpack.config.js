const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base=require('./webpack.config.base.js')


module.exports={
    ...base,
    mode:'development',
    module: {
        rules: [
          ...base.module.rules,
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],  //style-loader 把css写入以style标签的形式写入html，css-loader抽成文件以字符串的形式引入js
          },
        ],
      },
};


//loader，它是一个转换器，将A文件进行编译成B文件，比如：将A.less转换为A.css，单纯的文件转换过程。

//plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务



