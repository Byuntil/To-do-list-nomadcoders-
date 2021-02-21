const tabSetting = document.querySelector(".main-settings-btn");
const show2 = document.querySelector(".main-tab-setting");
const closeBtn2 = show2.querySelector(".icon-close");

function tabClose() {
  show2.style.top = "-100%";
}
function tabSettingShow() {
  show2.style.top = "3%";
}

tabSetting.addEventListener("click", tabSettingShow);
closeBtn2.addEventListener("click", tabClose);
/*
const backgroundBtn = document.querySelector("#background");
const infoBtn = document.querySelector("#info");
const backgroundView = document.querySelector(".wp-settings-view");
const infoView = document.querySelector(".info-settings-view");


function backgroundShow() {
  infoView.classList.remove("aI");
  backgroundView.classList.add("aI");
}
function infoShow() {
  backgroundView.classList.remove("aI");
  infoView.classList.add("aI");
}

infoBtn.addEventListener("click", infoShow);

const photoBtn = document.querySelector("#photos");
const colorsBtn = document.querySelector("#colorss");
const photosView = document.querySelector(".photos-view");
const coView = document.querySelector(".colors-view");

function photoView() {
  coView.classList.remove("aBa");
  photosView.classList.add("aCa");
}
function colorsView() {
  photosView.classList.remove("aCa");
  coView.classList.add("aBa");
}

photoBtn.addEventListener("click", photoView);
colorsBtn.addEventListener("click", colorsView);
*/
