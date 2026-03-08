import {btnAbout, btnHome} from "./index.js";

function resetPage() {
    const content = document.querySelector("#content");
    const footer = document.querySelector("#footer");

    // reset colour
    btnAbout.style.backgroundColor = "";
    btnHome.style.backgroundColor = "";

    // Delete all the child
    content.replaceChildren();
    footer.replaceChildren();
}

export {resetPage};