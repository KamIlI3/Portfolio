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
function logoSwipe(){
    const future = document.getElementsByClassName("future");
    for (let i=0;i<future.length; i++){
        future[i].style.display = "none"; //zastosowanie dla wszystkich divów o clasie "future" display="none" za pomocą pętli
    }
    futureIdx++; //inkrementacja futureIdx, która jest indeksem obencego diva
    if(futureIdx > future.length){
        futureIdx = 1; //jeśli wartość futureIdx bedzie wieksza od ilosci div to przyjmuje wartosc 1, czyli wraca do 2 z 3
    }
    future[futureIdx-1].style.display = "block"; // wyświetlenie diva o indeksie futureIdx-1
    setTimeout(logoSwipe, 2500); //ustawienie cooldown na funkcje 2,5s
}

//Zmiana tła linków
function fontColorOfA(element){
    element.dataset.originalColor = element.style.color; //zapisanie obecnego koloru czcionki do zmiennej
    element.style.color = 'rgb(146, 197, 4)'; //zmiana koloru czcionki
}
//Powrót do ustawień domyślnych
function backToDefult(element){
    element.style.color = element.dataset.originalColor; //powrót do pierwotnego koloru czcionki
}



