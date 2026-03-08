function resetPage() {
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");

    // reset flex direction after switch menu
    content.style.alignItems = "";

    // Delete all the child
    content.replaceChildren();
    footer.replaceChildren();
}

export {resetPage};