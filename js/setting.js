const tabSetting = document.querySelector(".main-settings-btn");
const show2 = document.querySelector(".main-tab-setting");
const closeBtn2 = show2.querySelector(".icon-close");

function tabClose(){
    show2.style.top='-100%';
}
function tabSettingShow(){
    show2.style.top='3%';
}

tabSetting.addEventListener("click", tabSettingShow);
closeBtn2.addEventListener("click", tabClose);