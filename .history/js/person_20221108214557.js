// 导航下拉菜单栏
var nav = document.querySelector('.nav');
var lis = nav.children;
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function() {
        this.children[1].style.display = 'block';
    }
    lis[i].onmouseout = function() {
        this.children[1].style.display = 'none';
    }
}
var board = document.querySelector('.board');
var text_liuyan = document.querySelector('.liuyan');
var btn_fabu = document.querySelector('.btn_fabu');
var ul_fabu = board.querySelector("ul");
btn_fabu.onclick = function () {
    if (text_liuyan.value == '') {
        alert('您没有输入内容');
        return false;
    } else {
        // (1) 创建元素
        var li = document.createElement('li');
        // 先有li 才能赋值 javascript:;可能会引起未知的错误
        // li.innerHTML = text_liuyan.value + "<a href='#'>删除</a>";
        li.innerHTML = text_liuyan.value + "<a id='delete1' href='javascript:;'>删除</a>" + "  " + "<button id='add1'>+1</button>";
        // (2) 添加元素
        ul_fabu.insertBefore(li, ul_fabu.children[0]);
        // (3) 删除元素 
        document.getElementById('delete1').addEventListener('click', function (e) {
            var box = document.getElementById("delete1");
            box.parentNode.remove();
        });
        // (4)留言加一 但未真正实现留言板加一的功能，新增的留言不能实现删除和加一
        document.getElementById('add1').addEventListener('click',function (e) {
            var box = document.getElementById("add1");
            var lili=box.parentNode.cloneNode(true);
            ul_fabu.insertBefore(lili, ul_fabu.children[0]);
        })
    }
}
var sliderbar = document.querySelector('.slider-bar');
var container = document.querySelector('.container');
// console.log(container.offsetTop);
var juli = sliderbar.offsetTop - container.offsetTop;
// console.log(juli);
    document.addEventListener('scroll', function () { 
        if (window.pageYOffset >= container.offsetTop) { 
            sliderbar.style.top = juli + 'px';
            sliderbar.style.position = 'fixed';
        } else {
            sliderbar.style.position = 'absolute';
            sliderbar.style.top = '900px';
        }
    })
    // 返回顶部 方法二 js实现 
var goBack = document.querySelector('.goBack');
goBack.addEventListener('click', function () { 
    window.scroll(0, 0);
})
var feedback = document.querySelector('.feedback');
console.log(feedback);
