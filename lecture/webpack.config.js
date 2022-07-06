const path = require("path"); // node
const webpack = require("webpack");

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval', // 빠르게
    resolve: {
        extensions: ['.js', '.jsx'] // 확장자 알아서 찾아줌
    },
    entry: {
        app: './client', // 파일들을 app.js로 합쳐줌
    }, // 입력
    module: { // = loader
        rules: [{
            test:  /\.jsx?/, // 규칙을 적용할 파일들 jsx, js
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },
    plugins: [],
    output: {
        path: path.join(__dirname, 'dist'), // __dirname: lecture(현재폴더) 와 dist 경로를 합쳐줌 현재폴더\dist
        filename: 'app.js',
    }, // 출력
};