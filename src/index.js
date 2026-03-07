// entry file
// home
import styleHome from "./home.css";
import home from "./home.js";
import backgroundImg from "./asset/background2.png"

// Event Listener Home
const btnHome = document.getElementById("home");
btnHome.addEventListener("click", function() {
   // console
   console.log("Clicking Home Menu...")

   document.body.style.backgroundImage = `url('${backgroundImg}')`;
   document.body.style.backgroundSize  = "cover";
});

console.log("Alert Testing!");