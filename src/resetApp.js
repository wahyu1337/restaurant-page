function resetPage() {
    const content = document.querySelector("#content");
    const footer = document.querySelector("#footer");

    // Delete all the child
    content.replaceChildren();
    footer.replaceChildren();
}

export {resetPage};