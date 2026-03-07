import backgroundImg from "../asset/background2.png";

const home = function() {
    // Current year for footer
    const currentYear = new Date().getFullYear();

    // DOM Manipulation
    // main content
    const mainContent = document.getElementById("content");
    // est
    const estDiv = document.createElement("div");
    // main title 
    const welcomeTitle = document.createElement("h2");
    const greetingTitle = document.createElement("p");
    // footer
    const footerDiv = document.getElementById("footer");
    const footerTitle = document.createElement("p");
    
    // classList add
    estDiv.classList.add("eyebrow");
    footerTitle.classList.add("footer-title")
    
    // text Content
    estDiv.textContent = "EST. 2026";
    welcomeTitle.textContent = "Welcome to the Restaurant";
    greetingTitle.textContent = "Delicious food and greate atmosphere.";
    footerTitle.textContent = `© ${currentYear} WAYS. ALL RIGHTS RESERVED`;

    // append DOM
    // EST
    mainContent.appendChild(estDiv);
    // WELCOME Content
    mainContent.appendChild(welcomeTitle);
    mainContent.appendChild(greetingTitle);

    // footer content
    footerDiv.appendChild(footerTitle);
};

// default pages
home();

// export var
export {home};