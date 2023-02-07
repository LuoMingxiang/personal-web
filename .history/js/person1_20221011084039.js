// 导航下拉菜单栏
var nav = document.querySelector('.nav');
var lis = nav.children;
for (var i = 0; i < lis.length; i++) {
  lis[i].onmouseover = function () {
    this.children[1].style.display = 'block';
  }
  lis[i].onmouseout = function () {
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
    // console.log(text.value);
    // (1) 创建元素
    var li = document.createElement('li');
    // 先有li 才能赋值 javascript:;可能会引起未知的错误
    // li.innerHTML = text_liuyan.value + "<a href='#'>删除</a>";
    li.innerHTML = text_liuyan.value + "<a id='test' href='javascript:;'>删除</a>" + "  " + "<button>+1</button>";
    // (2) 添加元素
    ul_fabu.insertBefore(li, ul_fabu.children[0]);
    // (3) 删除元素 删除的是当前链接的li  它的父亲
    // var as = ul_fabu.querySelectorAll('a');
    // for (var i = 0; i < as.length; i++){
    //     as[i].onclick = function () {
    //         ul_fabu.removeChild(this.parentNode);
    //     }
    // }
    // (4)留言加一 但未真正实现留言板加一的功能，新增的留言不能实现删除和加一
    // var copy = ul_fabu.querySelectorAll('button');
    // function Copy() {
    //     var lili = this.parentNode.cloneNode(true);
    //     ul_fabu.insertBefore(lili, ul_fabu.children[0]);
    // }
    // for (var i = 0; i < copy.length; i++) { 
    //     copy[i].addEventListener("click", Copy);
    // }

    // for (var i = 0; i < copy.length; i++){
    //     copy[i].onclick = function () {
    //         var lili = this.parentNode.cloneNode(true);
    //         console.log(lili);
    //         ul_fabu.insertBefore(lili, ul_fabu.children[0]);
    //     }
    // }
    document.getElementById('test').addEventListener('click', function (e) {
      // this.removeChild(e);
      var box = document.getElementById("test");
      box.parentNode.remove();

    });
  }
}

