var minute = document.querySelector(".hand.min");
var second = document.querySelector(".hand.sec");
var hr = document.querySelector(".hand.hr");
var start = 90;
setInterval(() => {
    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hour = now.getHours();
    var sec_angle = start + sec * 6;
    var min_angle = start + min * 6;
    var hour_angle = start + hour * 30;
    second.style.transform = `rotate(${sec_angle}deg)`;
    minute.style.transform = `rotate(${min_angle}deg)`;
    hr.style.transform = `rotate(${hour_angle}deg)`;
}, 1000);