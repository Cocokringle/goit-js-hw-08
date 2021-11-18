// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');  
const cardsMarkup = createGallery(galleryItems);
const galleryItem = document.querySelector('gallery__item')

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);


function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            `;
        }).join('');
    
}


let gallery = new SimpleLightbox('.gallery a', {
   captionsData: "alt",
   captionDelay: 250,
 });
gallery.on('show.simplelightbox', function () {
    
})