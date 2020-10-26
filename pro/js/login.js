$(function() {
    var btn1 = document.querySelector('.login .btn1')
        // var btn2 = document.querySelector('.login .btn2')
        // console.log(btn1, btn2);
    var uname = document.querySelector('.login #uname');
    var upwd = document.querySelector('.login #upwd');
    // console.log(upwd, uname);
    btn1.onclick = function() {
        var _uname = uname.value;
        var _upwd = upwd.value;
        if (!_uname) {
            alert("请输入用户名");
            return;
        }
        if (!_upwd) {
            alert("请输入密码")
            return;
        }


        // 创建异步对象
        var xhr = new XMLHttpRequest();
        // 接收响应
        xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var r = xhr.responseText;
                    if (r == 1) {
                        alert("登录成功");
                        location.href = "../index.html";
                    } else {
                        alert("登录失败");
                        location.href = "../login.html";
                    }
                }
            }
            // 创建请求
        xhr.open("get", `/pro/login/${_uname}&${_upwd}`, true);
        // 发送请求
        xhr.send();

    }

})