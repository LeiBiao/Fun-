const express = require("express");
// 创建路由
const r = express.Router();
// 引入连接池
const pool = require('../pool.js');
// const e = require("express");

// 登录
r.get("/login/:uname&:upwd", (req, res) => {
    var _uname = req.params.uname;
    var _upwd = req.params.upwd;
    console.log(_uname + _upwd);
    var sql = "select * from xz_user where uname=? and upwd=?";
    pool.query(sql, [_uname, _upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    })
})


//注册&验证

r.post("/register", (req, res) => {
    var obj = req.body;
    var sql = "select * from xz_user where uname=?";
    pool.query(sql, [obj.uname], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("0");
        } else {
            var sql_insert = "insert xz_user set ?";
            pool.query(sql_insert, [obj], (err, result) => {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res.send("1");
                }
            })
        }
    })
})

module.exports = r;