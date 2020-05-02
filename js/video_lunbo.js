//视频中间轮播部分
var box = document.getElementById('box');
var num = 0;
var timer = null;

function autoplay() {
    timer = setInterval(function() {
        num -= 5;
        if (num < -860) {
            num = 0
        }
        box.style.left = num + 'px'
    }, 50)
};
autoplay();
box.onmouseover = function() {
    clearInterval(timer)
}
box.onmouseout = function() {
    autoplay()
}