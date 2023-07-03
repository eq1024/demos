
const path = require('path')
const dotenv = require('dotenv');
const dot = require('dotenv-webpack')
// import { smart } from 'webpack-merge'

const pathConfig = {
  dev: path.resolve(__dirname, './.dev.env'),
  stage: path.resolve(__dirname, './.stage.env'),
  build: path.resolve(__dirname, './.build.env'),
}
const envConfig = dotenv.config({
  path: pathConfig[process.env.mode], // 配置文件路径
  encoding: 'utf8', // 编码方式，默认utf8
  debug: false, // 是否开启debug，默认false
}).parsed;

if (!envConfig) {

  let path = pathConfig[process.env.mode]
    console.log('配置文件不存在',process.env.mode);
  console.log(envConfig);
  process.exit(1);
}
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${process.env.P}.js`
  },
  plugins: [
    new dot({
      path: pathConfig[process.env.mode]
    })
  ]
}
