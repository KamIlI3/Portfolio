const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox); //Dołączenie diva

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', e => {  //Nadanie kazdemu selektorowi Image eventu click    
        lightbox.classList.add('active'); //Przypisanie do klasy "active"
        const img = document.createElement('img'); //Przypisanie do zminennej towrzenie elementu IMG
        img.src = image.src; //Przypisanie źródła do zmiennej
        while (lightbox.firstChild){ 
            lightbox.removeChild(lightbox.firstChild); //Usunięcie zdjecia po wyjściu z lightbox
        }
        lightbox.appendChild(img); //Wyświetlenie zdjęcia w lightbox
    });
});

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active'); //Wyjście z lightbox bo kliknieciu obok zdjecia
});