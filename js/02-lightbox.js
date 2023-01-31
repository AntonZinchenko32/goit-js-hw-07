import { galleryItems } from './gallery-items.js';
// Change code below this line

const myGallery = document.querySelector(".gallery");

createGallery();

// Створення,рендер розмітки, додавання єлементів до гаоереї

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

        link.append(image);

        items.push(link);
    });

    myGallery.append(...items);
}


console.log(galleryItems);
