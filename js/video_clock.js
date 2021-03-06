// 定义显示时间的函数showTime()
function showTime() {
    var now = new Date(); // 获取当前的时间
    var seperator = "-"; // “-”分隔符
    var seperator1 = ":"; // “-”分隔符
    var year = now.getFullYear(); // 年
    var month = now.getMonth() + 1; // 月
    var date = now.getDate(); // 日
    var hour = now.getHours(); // 时
    var minute = now.getMinutes(); // 分
    var seconds = now.getSeconds(); // 秒
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (date >= 0 && date <= 9) {
        date = "0" + date;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    var time_text = year + seperator + month + seperator + date + " " + hour + seperator1 + minute + seperator1 + seconds;
    var clock_line = document.getElementById("clock"); // 获取id为clock的p元素
    clock_line.innerText = time_text; // 给p元素设置内容语法是：element.innerText = string
    setTimeout("showTime();", 200); // 设置延时器0.2秒执行一次showTime()
}
// 调用函数showTime()
showTime();