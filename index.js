const btn = document.querySelector("#test");
const alertBox = document.querySelector("#alert-box");
const alertOverlay = document.querySelector("#alert-box-overlay");
const closeAlertBtn = document.querySelector("#alert-btn");

btn.addEventListener("click", (event)=>{
    alertBox.style.top = "50%";
    alertOverlay.style.top = 0;
});


closeAlertBtn.addEventListener("click",(event)=> {
    alertBox.style.top="-100%";
    alertOverlay.style.top = "-100%";
})