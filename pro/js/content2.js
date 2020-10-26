window.addEventListener('load', function() {
    var tab_list = document.querySelector('.tab_list');
    var lis = tab_list.querySelectorAll('.tab_list li');
    var select1 = document.querySelector('.tab_con .select1');
    var select2 = document.querySelector('.tab_con .select2');
    var select3 = document.querySelector('.tab_con .select3');
    var items = document.querySelectorAll('.item');
    for (var i = 0; i < lis.length; i++) {
        // 开始给5个小li 设置索引号 
        lis[i].setAttribute('index', i);
        lis[i].onclick = function() {

            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'current';
            // 2. 下面的显示内容模块
            var index = this.getAttribute('index');
            console.log(index);
            // 干掉所有人 让其余的item 这些div 隐藏
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            // 留下我自己 让对应的item 显示出来
            items[index].style.display = 'block';
        }
    }
    // 集数按钮
    strhtml1 = ``;
    strhtml2 = ``;
    strhtml3 = ``;

    for (var i = 1; i < 100; i++) {
        strhtml1 += `<button>第${i}集</button>`
    }
    for (var i = 100; i < 200; i++) {
        strhtml2 += `<button>第${i}集</button>`
    }
    for (var i = 200; i < 221; i++) {
        strhtml3 += `<button>第${i}集</button>`
    }

    select1.innerHTML = strhtml1;
    select2.innerHTML = strhtml2;
    select3.innerHTML = strhtml3;

    //留言栏
    // 删除li
    var del = function() {
            var as = document.querySelectorAll('a');
            for (var i = 0; i < as.length; i++) {
                as[i].onclick = function() {
                    // node.removeChild(child); 删除的是 li 当前a所在的li  this.parentNode;
                    ul.removeChild(this.parentNode);
                    localStorage.removeItem(`${k}`);

                }
            }
        }
        // 1. 获取元素
    var btn = document.querySelector('.leaving button');
    var text = document.querySelector('.leaving textarea');
    var ul = document.querySelector('.leaving ul');
    // 2. 注册事件
    var k = 0;
    btn.onclick = function() {
        if (text.value == '') {
            alert('您没有输入内容');
            return false;
        } else {
            // 创建元素
            var li = document.createElement('li');
            // 先有li 才能赋值
            li.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
            //  添加元素
            ul.insertBefore(li, ul.children[0]);
            //本地存储
            localStorage.setItem(`${k}`, text.value)
                //  删除元素 删除的是当前链接的li  它的父亲
                //del();
        }
        k++;
    }
    if (localStorage.getItem(`${k}`) != null) {
        //  加载页面以后创建k个li
        for (var i = 0; i < localStorage.length; i++) {
            var li = document.createElement('li')
                // 将本地数据复制给li
            li.innerHTML = localStorage.getItem(`${k}`) + "<a href='javascript:;'>删除</a>";
            // 添加元素
            ul.insertBefore(li, ul.children[0]);
        }
        // 删除元素 
        del();
        // location.reload()
    } else {
        return;
    }
    // localStorage.clear()
})