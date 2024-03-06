// -------------------------------------------------------alert box--------------------------------------

let screenWidth= window.innerWidth;
const btn = document.querySelector("#test");
const alertBox = document.querySelector("#alert-box");
const alertOverlay = document.querySelector("#alert-box-overlay");
const closeAlertBtn = document.querySelector("#alert-btn");

btn.addEventListener("click", (event)=>{
    
    if(screenWidth>769 && window.innerHeight<=screenWidth){
        alertBox.style.top = "2vh";        
    }
    else{
        alertBox.style.top = "50vh";        
    }    
    alertOverlay.style.top = 0;
});


closeAlertBtn.addEventListener("click",(event)=> {
    alertBox.style.top="-150vh";
    alertOverlay.style.top = "-150vh";
})