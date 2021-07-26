var border = document.querySelector("#border");
var color = document.querySelector("#color");
var blur = document.querySelector("#blur");

var root = document.querySelector(":root");

var image = document.querySelector('img');

border.addEventListener("mousemove",()=>{
    root.style.setProperty("--border_size", border.value+"px");
});
color.addEventListener("change",()=>{
    root.style.setProperty("--color", color.value);
});
blur.addEventListener("mousemove",()=>{
    root.style.setProperty("--blur", blur.value+"px");
});