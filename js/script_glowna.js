//Zmiana obrazków HTML/CSS/JS
const present = document.getElementById("present");
changeImage()
function changeImage() {
    if (present.classList.contains("image1")) {
        present.classList.remove("image1"); //usunięcie div "image1"
        present.classList.add("image2"); //dodanie div "image2"
    } else if (present.classList.contains("image2")) {
        present.classList.remove("image2");
        present.classList.add("image3");
    } else {
        present.classList.remove("image3");
        present.classList.add("image1");
    }
}
setInterval(changeImage, 3000);// Zmiana co 3 sekundy

//Zmiana obrazków Angular/React/jQuery
var futureIdx = 0;
logoSwipe();
function logoSwipe() {
    const future = document.getElementsByClassName("future");
    for (let i = 0; i < future.length; i++) {
        future[i].style.opacity = 0; //zastosowanie dla wszystkich divów o clasie "future" display="none" za pomocą pętli
        future[i].style.position = "absolute";

    }
    futureIdx++; //inkrementacja futureIdx, która jest indeksem obencego diva
    if (futureIdx > future.length) {
        futureIdx = 1; //jeśli wartość futureIdx bedzie wieksza od ilosci div to przyjmuje wartosc 1, czyli wraca do 2 z 3
    }
    future[futureIdx - 1].style.opacity = 1; // wyświetlenie diva o indeksie futureIdx-1
    future[futureIdx - 1].style.transition = "opacity 2s ease-in-out";

    setTimeout(logoSwipe, 3000); //ustawienie cooldown na funkcje 2,5s
}