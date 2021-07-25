window.addEventListener("keydown",(e)=>{
    var audio = document.querySelectorAll("audio");
    var key = document.querySelectorAll(".keys");

    for(let i= 0 ; i < audio.length ; i++){
        var atr = audio[i].getAttribute('data-key');
        if(atr == e.keyCode){
            audio[i].play();
            console.log(key[i]);
            key[i].classList.add("playing");
            setTimeout(()=>key[i].classList.remove("playing"),1000*0.09);
        }
    }
});