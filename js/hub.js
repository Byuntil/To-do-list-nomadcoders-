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

const hubView = document.querySelector(".main-tab-hub-view")

const bookmarkBtn = document.querySelector("#bookmark");
const todoBtn = document.querySelector("#todo");
const noteBtn = document.querySelector("#note");


function appendHtml(loaded, num){
    let div = document.createElement('div');
    if(num===1){
    div.className="bookmarks-view";
    }else if(num===2){
        div.className="todos-view";
    }else if(num===3){
        div.className="notes-view";
    }else{

    }
    div.innerHTML=loaded;
    hubView.appendChild(div);
}
function bookmarkShow(){
    hubView.innerHTML="";
    let load = `<div class="bookmark-box"><div class="bookmark"><div class="bookmark-head"><img class="bookmark-favicon" src = "http://www.google.com/s2/favicons?domain=http://google.com"></img><div class="bookmark-title">Google</div><div class="bookmark-setting-btn"><i class="fas fa-ellipsis-h"></i></div></div><a href="http://google.com" class="bookmark-body" style="background-image:url('img/google.PNG')"></a></div></div>
    <div class="bookmark-box"><div class="bookmark"><div class="bookmark-head"><img class="bookmark-favicon" src = "http://www.google.com/s2/favicons?domain=http://naver.com"></img><div class="bookmark-title">Naver</div><div class="bookmark-setting-btn"><i class="fas fa-ellipsis-h"></i></div></div><a href="http://naver.com" class="bookmark-body" style="background-image:url('img/naver.PNG')"></a></div></div>
    <div class="bookmark-box"><div class="bookmark"><div class="bookmark-head"><img class="bookmark-favicon" src = "http://www.google.com/s2/favicons?domain=http://nomadcoders.co/"></img><div class="bookmark-title">Nomardcoders</div><div class="bookmark-setting-btn"><i class="fas fa-ellipsis-h"></i></div></div><a href="http://nomadcoders.co/" class="bookmark-body" style="background-image:url('img/nomadcoders.PNG')"></a></div></div>
    <div class="bookmark-box"><div class="bookmark"><div class="bookmark-head"><i class="fab fa-github bookmark-favicon"></i><div class="bookmark-title">Github</div><div class="bookmark-setting-btn"><i class="fas fa-ellipsis-h"></i></div></div><a href="https://github.com/" class="bookmark-body" style="background-image:url('img/github.PNG')"></a></div></div>
    <div class="bookmark-box"><div class="bookmark"><div class="bookmark-head"><img class="bookmark-favicon" src = "http://www.google.com/s2/favicons?domain=http://stackoverflow.com"></img><div class="bookmark-title">Stackoverflow.com</div><div class="bookmark-setting-btn"><i class="fas fa-ellipsis-h"></i></div></div><a href="http://stackoverflow.com" class="bookmark-body" style="background-image:url('img/stackoverflow.PNG')"></a></div></div>
    <div class="bookmark-box"><div class="bookmark"><div class="bookmark-head"><img class="bookmark-favicon" src = "http://www.google.com/s2/favicons?domain=http://www.reddit.com"></img><div class="bookmark-title">Reddit</div><div class="bookmark-setting-btn"><i class="fas fa-ellipsis-h"></i></div></div><a href="http://www.reddit.com" class="bookmark-body" style="background-image:url('img/reddit.PNG')"></a></div></div>
    <div class="bookmark-box"><div class="bookmark"><div class="bookmark-head"><img class="bookmark-favicon" src = "http://www.google.com/s2/favicons?domain=http://instagram.com"></img><div class="bookmark-title">Instagram</div><div class="bookmark-setting-btn"><i class="fas fa-ellipsis-h"></i></div></div><a href="http://instagram.com" class="bookmark-body" style="background-image:url('img/instagram.PNG')"></a></div></div>
    <div class="bookmark-box"><div class="bookmark"><div class="bookmark-head"><img class="bookmark-favicon" src = "http://www.google.com/s2/favicons?domain=http://www.youtube.com"></img><div class="bookmark-title">Youtube</div><div class="bookmark-setting-btn"><i class="fas fa-ellipsis-h"></i></div></div><a href="http://www.youtube.com" class="bookmark-body" style="background-image:url('img/youtube.PNG')"></a></div></div>
    <div class="bookmark-box"><div class="bookmark"><div class="bookmark-head"><img class="bookmark-favicon" src = "http://www.google.com/s2/favicons?domain=https://developer.mozilla.org/"></img><div class="bookmark-title">Mdn</div><div class="bookmark-setting-btn"><i class="fas fa-ellipsis-h"></i></div></div><a href="https://developer.mozilla.org/" class="bookmark-body" style="background-image:url('img/mdn.PNG')"></a></div></div>
    <div class="bookmark-box"><div class="bookmark"><i class="fas fa-plus"></i></div></div>
    <div class="bookmark-box"><div class="bookmark"><i class="fas fa-plus"></i></div></div>
    <div class="bookmark-box"><div class="bookmark"><i class="fas fa-plus"></i></div></div>
    <div class="bookmark-box"><div class="bookmark"><i class="fas fa-plus"></i></div></div>
    <div class="bookmark-box"><div class="bookmark"><i class="fas fa-plus"></i></div></div>
    <div class="bookmark-box"><div class="bookmark"><i class="fas fa-plus"></i></div></div>
    <div class="bookmark-box"><div class="bookmark"><i class="fas fa-plus"></i></div></div>`;
    appendHtml(load, 1);
}

function todoShow(){
    hubView.innerHTML="";
    let load = `<div class="left-part"><div class="wt-todolist-view"><div class="wt-list-view-header">
    </div><div></div></div><button class="add-btn">Add</button></div>
     <div class=right-part></div>`;
     appendHtml(load,2);
}
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
                </div><textarea id="text"></textarea><button class="save-btn">save</button>`;
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
bookmarkBtn.addEventListener("click", bookmarkShow);
todoBtn.addEventListener("click", todoShow);
noteBtn.addEventListener("click", noteShow);
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
