import { galleryItems } from './gallery-items.js';

const myGallery = document.querySelector(".gallery");

createGallery();

new SimpleLightbox('.gallery a',{
    captionDelay: "250"
});

// Функція створення розмітки
function createGallery() {
    const items = [];

    galleryItems.forEach(item => {
        const { preview, original, description } = item;

        const link = document.createElement("a");
        link.classList.add("gallery__item");
        link.setAttribute("href", original);

        const image = document.createElement('img');
        image.classList.add("gallery__image");

        image.src = preview;
        image.alt = description;
        image.setAttribute("title", description);

        link.append(image);

        items.push(link);
    });

    myGallery.append(...items);
}

