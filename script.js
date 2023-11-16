//Zmiana obrazków HTML/CSS/JS
const present = document.getElementById("present");
changeImage()
function changeImage() {
    if (present.classList.contains("image1")) {
        present.classList.remove("image1");
        present.classList.add("image2");
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
        future[i].style.display = "none";
    }
    futureIdx++;
    if(futureIdx > future.length){
        futureIdx = 1;
    }
    future[futureIdx-1].style.display = "block";
    setTimeout(logoSwipe, 2500);
}


