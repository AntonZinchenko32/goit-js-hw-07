import { galleryItems } from './gallery-items.js';

const myGallery = document.querySelector(".gallery");

createGallery();
myGallery.addEventListener("click", selectImage);


// Створення,рендер розмітки, додавання єлементів до гаоереї

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


function selectImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    // Зберігаю посилання на обране зображення в змінну
    const selectedImage = event.target;
    
    // Замінюю лінк малого зображення на велике, в src
    selectedImage.setAttribute("src", event.target.dataset.source);
    
    // Створюю та відкриваю модалку
    const modal = basicLightbox.create(selectedImage.outerHTML);
    modal.show();

    // Функця, що спрацьовує при натисканні будь якої клавіши на клавіатурі
    const buttonPressHandler = (event) => {
        if (event.key === "Escape") {
            modal.close(document.removeEventListener("keydown", buttonPressHandler));
        }
    }

    // Додаю прослуховання натискання клавіш, на клавіатурі
    document.addEventListener("keydown", buttonPressHandler);
}

