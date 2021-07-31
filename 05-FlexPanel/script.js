var panels = document.querySelectorAll(".images");

panels.forEach((panel)=>{
    panel.addEventListener("click", (e)=>{
        for (let i = 0; i < panels.length; i++) {
            if(panels[i] !== panel){
                panels[i].classList.remove("active");
            }
        }
        panel.classList.toggle("active");
    });
});