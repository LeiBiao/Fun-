$(function() {
    var btn = document.querySelector(".btn");
    var password = document.querySelector("#upwd");
    var email = document.querySelector("#email");
    var phone = document.querySelector("#phone");
    var p_msg = document.querySelector(".msg")
    password.onblur = function() {
        var _upwd = upwd.value;
        // 强密码
        var rge_upwd = /^(?![0-9a-z]+$)(?![A-Za-z]+$)[0-9A-Za-z]{6,}$/;
        if (!rge_upwd.test(_upwd)) {
            p_msg.className = "msg msg_wrong";
            p_msg.innerHTML = "请输入6位以上至少包含一位大写字母和一位数字,不能包含特殊符号的密码";
            // alert("请输入6位以上至少包含一位大写字母和一位数字,不能包含特殊符号的密码");
        }
    }
    email.onblur = function() {
        var _email = email.value;
        var rge_email = /^\w+@\w+\.\w+(\.cn)?$/;
        if (!rge_email.test(_email)) {
            p_msg.className = "msg msg_wrong";
            p_msg.innerHTML = "请输入正确邮箱格式";
        }
    }

    phone.onblur = function() {
        var _phone = phone.value;
        var reg_phone = /^1[3-9]\d{9}/;
        if (!reg_phone.test(_phone)) {
            p_msg.className = "msg msg_wrong";
            p_msg.innerHTML = "请输入正确手机号格式";
            // alert("请输入正确手机号格式");
        }
    }

    btn.onclick = function() {
        var _uname = uname.value;
        var _upwd = upwd.value;
        var _email = email.value;
        var _phone = phone.value;
        var _user_name = user_name.value;
        // 创建异步对象
        var xhr = new XMLHttpRequest();
        //接收响应
        xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var r = xhr.responseText;
                    if (r == 1) {
                        alert("注册成功");
                        location.href = "../login.html";
                    };
                    if (r == 0) {
                        alert("注册失败");
                        location.href = "../reg.html";
                    }
                }
            }
            // 创建请求
        xhr.open("post", "/pro/register", true);
        // 方式请求
        xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
        var formdata = `uname=${_uname}&upwd=${_upwd}&email=${_email}&phone=${_phone}&user_name=${_user_name}`;
        xhr.send(formdata);
    }
})