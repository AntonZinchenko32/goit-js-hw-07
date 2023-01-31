import { galleryItems } from './gallery-items.js';

const myGallery = document.querySelector(".gallery");

createMarkup();
myGallery.addEventListener("click", selectImage);


function createMarkup() {
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

// Функціонал галереї
function selectImage(event) {
    
    // Забороняємо дії що виконує браузер, за замовчуванням
    event.preventDefault();

    // Перевіряємо чи цільовий елемент, саме, зображення 
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

    // Додаю прослуховування натискання клавіш, на клавіатурі
    document.addEventListener("keydown", buttonPressHandler);
}

