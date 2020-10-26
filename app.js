const express = require("express");
// 连接路由
const pro = require("./router/pro.js");
// 引入body-Parser
const bodyParser = require('body-parser');
// 创建web服务器
const app = express();
// 设置的端口
app.listen(8080);
// 托管静态资源
app.use(express.static("./pro"));
// 在路由器之前,应用bodyParser,讲post请求的数据解析成对象
app.use(bodyParser.urlencoded({
    extended: false
}));
// 前缀
app.use('/pro', pro);