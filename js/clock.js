const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minuties = date.getMinutes();

    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${minuties<10?`0${minuties}`:minuties}`;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();