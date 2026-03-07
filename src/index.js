// entry file
// reset app
import { reset } from "./resetApp.js";

// home
import style from "./style.css";
import {home} from "./pages/home.js";
import backgroundImg from "./asset/background2.png"
// about
import {about} from "./pages/about.js";

// Event Listener Home
const btnHome = document.getElementById("home");
btnHome.addEventListener("click", function() {
   // logs
   console.log("Clicking Home Pages...");
   //call the home func
   home();
   // add the background after switch from another pages
   document.body.style.backgroundImage = `url('${backgroundImg}')`;
   document.body.style.backgroundSize  = "cover";
});

// event listener about
const btnAbout = document.getElementById("about");
btnAbout.addEventListener("click", function() {
   // logs
   console.log("Clicking About Pages...");
   // call the home func
   about();
   // change or removing the background
   document.body.style.backgroundImage = "url()";
});