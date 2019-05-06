const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


function init(){
 const date  = new Date();
 const hours = date.getHours();
 const minutes = date.getMinutes();
 const seconds = date.getSeconds();

 clockTitle.innerHTML= `${hours}:${minutes}:${
     seconds < 10 ? `0${seconds}` : seconds 
    }`;
 
}

function hi(){
    setInterval(init, 1000);
}
hi();