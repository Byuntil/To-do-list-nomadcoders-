const tabHub = document.querySelector(".main-nav-btns-right");
const show = document.querySelector(".main-tab-hub");
const closeBtn = show.querySelector(".icon-close");

function tabClose() {
  show.style.top = "-100%";
}
function tabHubShow() {
  show.style.top = "3%";
}

tabHub.addEventListener("click", tabHubShow);
closeBtn.addEventListener("click", tabClose);

const hubView = document.querySelector(".main-tab-hub-view");
const bookmarkBtn = document.querySelector("#bookmark");
const todoBtn = document.querySelector("#todo");
const bookmarkView = document.querySelector(".bookmarks-view");
const toDoView = document.querySelector(".todos-view");

/*
function saveNote(){
        const inputtext = document.querySelector("#text");
        const texts = inputtext.value;
        localStorage.setItem("text", texts);
}
function noteShow(){
    hubView.innerHTML="";
    let load = `<div class="left-part"><div class="notes-box"><div class="note a"><div class="note-title-box">
                <div class="note-title">New Note</div><div class="note-time"><span></span></div></div></div></div>
                <button class="add-btn">Add</button></div><div class="right-part"><div class="note-time"><span></span>
                </div><textarea id="text">sdd</textarea><button class="save-btn">save</button>`;
    appendHtml(load, 3);
    const l = document.querySelector(".left-part");
    const n = l.querySelector(".note-time");
    const d = n.querySelector("span");
    const l_ = document.querySelector(".right-part");
    const n_ = l_.querySelector(".note-time");
    const d_ = n_.querySelector("span");
    d.innerText = `${getDate()}`;
    d_.innerText = `${getDate()}`;
    document.querySelector(".save-btn").addEventListener("click", saveNote);
}
*/
function bookmarkShow() {
  toDoView.classList.remove("aT");
  bookmarkView.classList.add("aB");
}
function todoShow() {
  bookmarkView.classList.remove("aB");
  toDoView.classList.add("aT");
}
bookmarkBtn.addEventListener("click", bookmarkShow);
todoBtn.addEventListener("click", todoShow);
/*noteBtn.addEventListener("click", noteShow);

const addBtn = document.querySelector(".add-btn");
function addNote(){
    const textarea = document.createElement('textarea');
    
}
addBtn.addEventListener("click", addNote);

function getDate(){
    var date = new Date();
    var dat = date.getDay();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minuties = date.getMinutes();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var t = `${weekday[date.getDay()]} ${dat<10?`0${dat}`: dat}, ${year} ${hours<10?`0${hours}`:hours}:${minuties<10?`0${minuties}`:minuties}`;
    return t;
}
*/
<<<<<<< HEAD
=======
/*
function backgroundShow() {
  infoView.classList.remove("aI");
  backgroundView.classList.add("aI");
}
function infoShow() {
  backgroundView.classList.remove("aI");
  infoView.classList.add("aI");
}
backgroundBtn.addEventListener("click", backgroundShow);
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
const todoTime = document.querySelector(".todo-time");
const todoTimeText = todoTime.querySelector("span");
function getDate() {
  var date = new Date();
  var dat = date.getDay();
  var year = date.getFullYear();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var t = `${weekday[date.getDay()]} ${dat < 10 ? `0${dat}` : dat}, ${year}`;
  todoTimeText.innerText = t;
}

function init() {
  getDate();
}
init();
const ba = document.querySelector("preview");
const body = document.querySelector("body");
function addBodyTag() {
  body.setAttribute("style");
}
ba.addEventListener("click", addBodyTag);
>>>>>>> master
