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

//Mapa myśli
function pickOne(id) {
    const mindMapImg = document.getElementById("mindMapImg");
    mindMapImg.style.opacity = 0;
    mindMapImg.style.transition = "opacity 1s ease-in-out"; // Dodanie animacji
    setTimeout(() => {
        mindMapImg.style.display = "none";   // Zmiana display na none po pewnym czasie
    }, 1000);

    const mindsClouds = document.querySelectorAll('.mindsClouds');
    mindsClouds.forEach(function (cloud) {
        cloud.style.opacity = 0;
        cloud.style.transition = "opacity 1s ease-in-out"; // Dodanie animacji
        setTimeout(() => {
            cloud.style.display = "none";   // Zmiana display na none po pewnym czasie
        }, 1000);
    });
    var wybranaZawartosc = document.getElementById(id + '1');
    var wybranaZawartoscBC = window.getComputedStyle(document.getElementById(id)).backgroundColor;
    if (wybranaZawartosc) {
        setTimeout(() => {
            wybranaZawartosc.style.display = 'flex';
            wybranaZawartosc.style.justifyContent = "center";
            wybranaZawartosc.style.alignItems = "center";
            wybranaZawartosc.style.flexDirection = "column";
            wybranaZawartosc.style.margin = 0;
            wybranaZawartosc.style.width = "auto";
            wybranaZawartosc.style.height = "60vh";
            wybranaZawartosc.style.padding = "3%";
            wybranaZawartosc.style.backgroundColor = wybranaZawartoscBC;
            wybranaZawartosc.style.color = "black";
            wybranaZawartosc.style.opacity = 0; // Ustawienie początkowej wartości na 0
            wybranaZawartosc.style.borderRadius = "15%";
            wybranaZawartosc.style.transition = "opacity 2s ease-in-out"; // Dodanie animacji
        }, 1000);
        setTimeout(() => {
            wybranaZawartosc.style.opacity = 1; // Zmiana opacity na 1 po pewnym czasie
        }, 1050);
    }
}

function mindsSwap() {
    const zawartosc = document.getElementsByClassName('zawartosc');
    if (aktualnyIndex < zawartosc.length - 1) {
        zawartosc[aktualnyIndex].style.display = 'none';
        zawartosc[aktualnyIndex + 1].style.display = 'block';
        aktualnyIndex++;
    }
}