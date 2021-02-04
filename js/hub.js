const tabHub = document.querySelector(".main-nav-btns-right");
const show = document.querySelector(".main-tab-hub");
const closeBtn = show.querySelector(".icon-close");

function tabClose(){
    show.style.top='-100%';
}
function tabHubShow(){
    show.style.top='3%';
}

tabHub.addEventListener("click", tabHubShow);
closeBtn.addEventListener("click", tabClose);