import {home} from "./pages/home.js";

// home btn
function reset(){
    // DOM
    const btnHome = document.getElementById("home");
    const content = document.getElementById("content");
    // center content
    const estDiv = document.querySelector(".eyebrow");
    const welcomeTitle = document.querySelector("h2");
    const greetingTitle = document.querySelector("p");
    // footer
    const footerDiv = document.querySelector("#footer");
    const footerTitle = document.querySelector(".footer-title");
    
    // delete all the child
    content.removeChild(estDiv);
    content.removeChild(welcomeTitle);
    content.removeChild(greetingTitle);

    footerDiv.removeChild(footerTitle);
};

export {reset};