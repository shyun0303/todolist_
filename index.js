const title = document.querySelector("#title");

const CLICKED_CLASS="clicked";

//const OTHER_COLOR = "rgb(52, 90, 94)";
//const BASE_COLOR = "rgb(52, 10, 94)";

function handleClick(){
title.classList.toggle(CLICKED_CLASS);

}
function init(){
    title.addEventListener("click", handleClick)
}
init();

