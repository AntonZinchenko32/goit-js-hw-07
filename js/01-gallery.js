import { galleryItems } from './gallery-items.js';
// Change code below this line
const myGallery = document.querySelector(".gallery");

myGallery.addEventListener("click", selectImage);

// This is where delegation «magic» happens
function selectImage(event) {
    event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
    const selectedImage = event.target.dataset.source;
    console.log(selectedImage);
}

// Створення і рендер розмітки
createGallery();

function createGallery() {
    const items = [];
    galleryItems.forEach(item => {
        const { preview, original, description } = item;

        const thumb = document.createElement("div");
        thumb.classList.add('gallery__item');

        const link = document.createElement("a");
        link.classList.add("gallery__link");
        link.setAttribute("href", original);

        const image = document.createElement('img');
        image.classList.add("gallery__image");

        image.dataset.source = original;
        image.src = preview;
        image.alt = description;

        thumb.append(link);
        link.append(image);

        items.push(thumb);
    });

    myGallery.append(...items);
}




console.log(galleryItems);
