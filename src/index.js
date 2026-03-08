// entry file
// reset app
import { resetPage } from "./resetApp.js";

// PAGES
// home
import style from "./style.css";
import {home} from "./pages/home.js";

//img
import backgroundImg from "./asset/background2.png";
// preload cache img
const preloadBg = document.createElement("img");
preloadBg.src = backgroundImg;
// about
import {about} from "./pages/about.js";

// Transition
import { transitionTo } from "./transition/transition.js";

// ----------------------------------------------------------------------

// Event Listener Home
const btnHome = document.getElementById("home");
btnHome.addEventListener("click", function () {
   transitionTo(() => {
      // logs
      console.log("Clicking home pages...")
      resetPage();
      home();
      // change button color on current's page
      btnHome.style.backgroundColor = "rgba(201,169,110,0.07)";
      btnAbout.style.backgroundColor = "transparent";
      document.body.style.backgroundImage = `url('${backgroundImg}')`;
      document.body.style.backgroundSize = "cover";
    }, backgroundImg); 
});

// event listener about
const btnAbout = document.getElementById("about");
btnAbout.addEventListener("click", function() {
   transitionTo(() => {
      // logs
      console.log("Clicking About Pages...");
      resetPage();
      about();
      // change button color on current's page
      btnHome.style.backgroundColor = "transparent";
      btnAbout.style.backgroundColor = "rgba(201,169,110,0.07)";
      // change or removing the background
      document.body.style.backgroundImage = "url()";
   });   
});

export {btnAbout, btnHome};