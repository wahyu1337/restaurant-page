export function transitionTo(callback, bgImage = null) {
    const body = document.body;

    body.classList.add("fading");

    setTimeout(() => {
        callback();

        if (bgImage) {
            // Pastikan gambar sudah loaded sebelum fade in
            const img = new Image();
            img.onload = () => {
                setTimeout(() => body.classList.remove("fading"), 20);
            };
            img.src = bgImage;
        } else {
            setTimeout(() => body.classList.remove("fading"), 20);
        }

    }, 500);
}