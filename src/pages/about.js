import {home} from "./home.js";

function about(){
    // get the year
    const currentYear = new Date().getFullYear();
    // delete the background
    document.body.style.backgroundImage = "url()";
    // back to top when change's pages
    window.scrollTo(0, 0);

    // DOM
    const content = document.querySelector("#content");
        const aboutInfo = document.createElement("div");
        // contact about
        const aboutHeader = document.createElement("div");
            const aboutTitle = document.createElement("p");
        // contact founder
        const founder = document.createElement("div");
            const founderTitle= document.createElement("p");
            const founderName = document.createElement("p");
        // contact email
        const email = document.createElement("div");
            const emailTitle = document.createElement("p");
            const emailDetail = document.createElement("p");
        // contact Number
        const number = document.createElement("div");
            const numberTitle = document.createElement("p");
            const numberDetail = document.createElement("p");


    const footer = document.querySelector("#footer");
    const footerTitle = document.createElement("p");
    
    // classtList Add 
    aboutInfo.classList.add("aboutInfo");
        aboutHeader.classList.add("about-header");
        founder.classList.add("founder");
        email.classList.add("email");
        number.classList.add("number");
    footerTitle.classList.add("footer-title");

    // content text
    // about, founder, email
    aboutTitle.textContent =  "ABOUT US";
    founderTitle.textContent = "FOUNDER";
    founderName.textContent = "Wahyu Isnaeni";
    emailTitle.textContent = "EMAIL";
    emailDetail.textContent = "wahyuisnaeni2002@gmail.com";
    numberTitle.textContent = "CONTACT";
    numberDetail.textContent = "+6289-562-334-6XXX";
    // footer text
    footerTitle.textContent = footerTitle.textContent = `© ${currentYear} WAYS. ALL RIGHTS RESERVED` ;
    
    // append
    // content, about, footer
    content.appendChild(aboutInfo);
    // about child
    aboutInfo.appendChild(aboutHeader);
    aboutHeader.appendChild(aboutTitle);
    aboutInfo.appendChild(founder);
        founder.appendChild(founderTitle);
        founder.appendChild(founderName);
    aboutInfo.appendChild(email);
        email.appendChild(emailTitle);
        email.appendChild(emailDetail);
    aboutInfo.appendChild(number);
        number.appendChild(numberTitle);
        number.appendChild(numberDetail);
    // footer
    footer.appendChild(footerTitle);
}

about();
export {about};