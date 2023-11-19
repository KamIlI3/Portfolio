//Zmiana tła linków
function fontColorOfA(element){
    element.dataset.originalColor = element.style.color; //zapisanie obecnego koloru czcionki do zmiennej
    element.style.color = 'rgb(146, 197, 4)'; //zmiana koloru czcionki
}
//Powrót do ustawień domyślnych
function backToDefult(element){
    element.style.color = element.dataset.originalColor; //powrót do pierwotnego koloru czcionki
}



