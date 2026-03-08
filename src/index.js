// entry file
// reset app
import { resetPage } from "./resetApp.js";

// PAGES
// home, menu, about & stylle
import style from "./style.css";
import {home} from "./pages/home.js";
import {menu} from "./pages/menu.js";
import {about} from "./pages/about.js";

//img
import backgroundImg from "./asset/background2.png";
// preload cache img
const preloadBg = document.createElement("img");
preloadBg.src = backgroundImg;
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
      btnMenu.style.backgroundColor = "transparent";
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
      btnMenu.style.backgroundColor = "transparent";
      btnAbout.style.backgroundColor = "rgba(201,169,110,0.07)";
      // change or removing the background
      document.body.style.backgroundImage = "url()";
   });   
});

// event listener menu
// const btnMenu = document.getElementById("menu");
// btnMenu.addEventListener("click", function() {
//    transitionTo(() => {
//       // logs
//       console.log("Clicking About Pages...");
//       resetPage();
//       menu();
//       // change button color on current's page
//       btnHome.style.backgroundColor = "transparent";
//       btnMenu.style.backgroundColor = "rgba(201,169,110,0.07)";
//       btnAbout.style.backgroundColor = "transparent";
//       // change or removing the background
//       document.body.style.backgroundImage = "url()";
//    });   
// });