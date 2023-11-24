function showSelectedDiv() {
    var selectedValue = document.getElementById("zadania_select").value;
    hideAllDivs();
    var selectedDiv = document.getElementById("div" + selectedValue);
        selectedDiv.style.display = "block";
}

//Domyślny div po załadowaniu strony
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("zadania_select").value = "option1";

    showSelectedDiv();
});

  
  function hideAllDivs() {
    var allDivs = document.getElementsByClassName("zadania");
    for (var i = 0; i < allDivs.length; i++) {
      allDivs[i].style.display = "none";
    }
  }
  



        var num = document.getElementById("num");
        var answer = document.getElementById("answer");
        var button = document.getElementById("button");
        var list = document.getElementById("list");
        var i = 0;
        var los = Math.floor(Math.random()*10)+1;
        button.addEventListener("click", gra);
        function gra(){
            if (num.value >=1 && num.value <=10) {
                i++

           if (los == num.value) {
                answer.innerHTML = "Brawo! Zgadłeś za " + i + " razem. Wylosowana liczba to: " + num.value;
                button.innerHTML = "Odśwież";
                button.removeEventListener("click", gra);
                button.addEventListener("click", odswiez);
            }
            else if (los > num.value) {
                answer.innerHTML = "wylosowana liczba jest wieksza";
            }
            else{
                answer.innerHTML = "wylosowana liczba jest mniejsza";
            }
            var li = document.createElement("li");
            list.appendChild(li);
            list.lastChild.innerHTML = i.toString() + ": " + num.value;
        }


        }
        function odswiez(){
            location.reload();
        }

      //Koszt biletów
        function aquapark(){
            const iloscBiletowNormalnych = Number.parseInt(document.getElementById("ilosc_biletow_normalnych").value);
            const iloscBiletowUlgowych = Number.parseInt(document.getElementById("ilosc_biletow_ulgowych").value);
            const iloscGodzin = Number.parseInt(document.getElementById("ilosc_godzin").value);
            const kartaDuzejRodziny = document.getElementById("karta_duzej_rodziny");
            const wynik = document.getElementById("wynik");
            var cenaBiletuNormalnego = 10;
            var cenaBiletuUlgowego = 5;
            var kosztCalosciowy = 0;
            if(iloscGodzin > 4){
                cenaBiletuNormalnego = 50;
                cenaBiletuUlgowego = 25;
                kosztCalosciowy = (iloscBiletowNormalnych*cenaBiletuNormalnego)+(iloscBiletowUlgowych*cenaBiletuUlgowego);
                if(kartaDuzejRodziny.checked){
                    kosztCalosciowy = kosztCalosciowy - (kosztCalosciowy*0.1);
                    for(let i=14; i<iloscBiletowUlgowych; i+=15){
                        kosztCalosciowy = kosztCalosciowy - cenaBiletuNormalnego;
                    }
                    wynik.innerHTML = "Koszt pobytu w Aquaparku po uwzględnieniu rabatu wyniesie: " + kosztCalosciowy + " zł.";
                }else{
                    for(let i=14; i<iloscBiletowUlgowych; i+=15){
                        kosztCalosciowy = kosztCalosciowy - cenaBiletuNormalnego;
                    }
                    wynik.innerHTML = "Koszt pobytu w Aquaparku bez rabatu wyniesie: " + kosztCalosciowy + " zł.";
                }
            }else{
                kosztCalosciowy = (iloscBiletowNormalnych*iloscGodzin*cenaBiletuNormalnego)+(iloscBiletowUlgowych*cenaBiletuUlgowego*iloscGodzin);
                if(kartaDuzejRodziny.checked){
                    kosztCalosciowy = kosztCalosciowy - (kosztCalosciowy*0.1);
                    for(let i=14; i<iloscBiletowUlgowych; i+=15){
                        kosztCalosciowy = kosztCalosciowy - cenaBiletuNormalnego;
                    }
                    wynik.innerHTML = "Koszt pobytu w Aquaparku po uwzględnieniu rabatu wyniesie: " + kosztCalosciowy + " zł.";
                }else{
                    for(let i=14; i<iloscBiletowUlgowych; i+=15){
                        kosztCalosciowy = kosztCalosciowy - cenaBiletuNormalnego;
                    }
                    wynik.innerHTML = "Koszt pobytu w Aquaparku bez rabatu wyniesie: " + kosztCalosciowy + " zł.";
                }
            }
        }  

      //Kalkulator
        var text = document.getElementById("text");
        var clear = document.getElementById("cl");
        var temp1 = 0;
        var temp2 = 0;
        var temp3 = "";
        var result = 0;


        function reset(){
            text.value = "";
        }
        function seven(){
            text.value += "7";
        }
        function eight(){
            text.value += "8";
        }
        function nine(){
            text.value += "9";
        }
        function four(){
            text.value += "4";
        }
        function five(){
            text.value += "5";
        }
        function six(){
            text.value += "6";
        }
        function one(){
            text.value += "1";
        }
        function two(){
            text.value += "2";
        }
        function three(){
            text.value += "3";
        }
        function zero(){
            text.value += "0";
        }
        function dot(){
            text.value += ".";
        }

        function add(){
            temp1 = text.value*1;
            temp3 = "+";
            text.value = "";
        }
        function equal(){
            temp2 = text.value*1;
            if(temp3 == "+"){
            result = temp1 + temp2;
            text.value = result; 
            }
            else if(temp3 == "-"){
            result = temp1 - temp2;
            text.value = result;
            }
            else if(temp3 == "*"){
            result = temp1 * temp2;
            text.value = result;
            }
            else{
            result = temp1 / temp2;
            text.value = result;
            }
            
        }
        function minus(){
            temp1 = text.value*1;
            temp3 = "-";
            text.value = "";
        }
        function mul(){
            temp1 = text.value*1;
            temp3 = "*";
            text.value = "";
        }
        function sub(){
            temp1 = text.value*1;
            temp3 = "/";
            text.value = "";
        }

      //Funkcje dla Kalkulator2
        function dodawanie(){
            const a = Number.parseInt(document.getElementById("a").value);
            const b = Number.parseInt(document.getElementById("b").value); 
            var wynik = document.getElementById("wynik");
            if(((document.getElementById("a").value.trim()) && (document.getElementById("b").value.trim()))||((!isNaN(a))&&(!isNaN(b)))){
                wynik.innerHTML = "Wynik dodawania to: " + (a+b);
            }else{
                wynik.innerHTML = "Popraw wartości w polu a lub b";
            }
        }

        function odejmowanie(){
            const a = Number.parseInt(document.getElementById("a").value);
            const b = Number.parseInt(document.getElementById("b").value);
            var wynik = document.getElementById("wynik");
            if(((document.getElementById("a").value.trim()) && (document.getElementById("b").value.trim()))||((!isNaN(a))&&(!isNaN(b)))){
                wynik.innerHTML = "Wynik odejmowania to: " + (a-b);
            }else{
                wynik.innerHTML = "Popraw wartości w polu a lub b";
            }
        }

        function mnozenie(){
            const a = Number.parseInt(document.getElementById("a").value);
            const b = Number.parseInt(document.getElementById("b").value);
            var wynik = document.getElementById("wynik");
            if(((document.getElementById("a").value.trim()) && (document.getElementById("b").value.trim()))||((!isNaN(a))&&(!isNaN(b)))){
                wynik.innerHTML = "Wynik mnożenia to: " + (a*b);
            }else{
                wynik.innerHTML = "Popraw wartości w polu a lub b";
            }
        }

        function dzielenie(){
            const a = Number.parseInt(document.getElementById("a").value);
            const b = Number.parseInt(document.getElementById("b").value);  
            var wynik = document.getElementById("wynik");
            if(((document.getElementById("a").value.trim()) && (document.getElementById("b").value.trim()))||((!isNaN(a))&&(!isNaN(b)))){
                wynik.innerHTML = "Wynik dzielenia to: " + (a/b);
            }else{
                wynik.innerHTML = "Popraw wartości w polu a lub b";
            }
        }

        function reszta(){
            const a = Number.parseInt(document.getElementById("a").value);
            const b = Number.parseInt(document.getElementById("b").value);
            var wynik = document.getElementById("wynik");
            if(((document.getElementById("a").value.trim()) && (document.getElementById("b").value.trim()))||((!isNaN(a))&&(!isNaN(b)))){
                wynik.innerHTML = "Wynik reszty z dzielenia to: " + (a%b);
            }else{
                wynik.innerHTML = "Popraw wartości w polu a lub b";
            }
        }

        function dzielenieCalkowite(){
            const a = Number.parseInt(document.getElementById("a").value);
            const b = Number.parseInt(document.getElementById("b").value);
            var wynik = document.getElementById("wynik");
            if(((document.getElementById("a").value.trim()) && (document.getElementById("b").value.trim()))||((!isNaN(a))&&(!isNaN(b)))){
                wynik.innerHTML = "Wynik dzielenia całkowitego to: " + Math.floor(a/b);
            }else{
                wynik.innerHTML = "Popraw wartości w polu a lub b";
            }
        }

            //Kalkulator3
        function suma(){
            var pole1 = document.getElementById("pole1");
            var pole2 = document.getElementById("pole2");
            var wynik = document.getElementById("wynik");
            var suma = (pole1.value)*1 + (pole2.value)*1;
            wynik.innerHTML = "Wynik Sumy: " + suma;
        };


        function podstawy(){
            var pole1 = document.getElementById("pole1");
            var pole2 = document.getElementById("pole2");
            var wynik = document.getElementById("wynik");
            var iloraz = (pole1.value)*1/(pole2.value)*1;
            var roznica =(pole1.value)*1-(pole2.value)*1;
            var iloczyn = (pole1.value)*1*(pole2.value)*1;
            wynik.innerHTML = `Iloraz:${iloraz}
            Różnica:${roznica}
            Iloczyn:${iloczyn}`;
        };




        function kalkulator(){
            var pole1 = document.getElementById("pole1");
            var pole2 = document.getElementById("pole2");
            var wynik = document.getElementById("wynik");
            var dodawanie = document.getElementById("dodawanie");
            var odejmowanie = document.getElementById("odejmowanie");
            var mnozenie = document.getElementById("mnozenie");
            var dzielenie = document.getElementById("dzielenie");
            var suma = (pole1.value)*1 + (pole2.value)*1;
            var iloraz = (pole1.value)*1/(pole2.value)*1;
            var roznica =(pole1.value)*1-(pole2.value)*1;
            var iloczyn = (pole1.value)*1*(pole2.value)*1;
            if(dodawanie.checked){
                wynik.innerHTML = "Wynik dodawania: " + suma;}  
            else if(odejmowanie.checked){
            wynik.innerHTML = "Wynik odejmowania: " + roznica;}
            else if(mnozenie.checked){
            wynik.innerHTML = "Wynik mnożenia: " + iloczyn;}
            else if(dzielenie.checked){
            wynik.innerHTML = "Wynik dzielenia: " + iloraz;
            }else{
            wynik.innerHTML = "MUSISZ COS ZAZNACZYĆ!";
            }
        };

      //Obliczanie kosztów wesela
        function wesele(){
            const goscie = Number.parseInt(document.getElementById("goscie").value);
            const poprawiny = document.getElementById("poprawiny");
            var kosztWesela = (goscie*100);
            var kosztPoprawin = Math.round(kosztWesela*0.3);
            var calkowityKoszt = Math.round(kosztWesela+kosztPoprawin);
            var wynik = document.getElementById("wynik");
            if(poprawiny.checked){
                wynik.innerHTML = "Koszt wesela wyniesie " + calkowityKoszt + " zł.";
            }else{
            wynik.innerHTML = "Koszt wesela wyniesie " + kosztWesela + " zł.";
            }
        };

      //Obliczenie dostawy Pizzy
        function dowozPizzy(){
            const km = Number.parseInt(document.getElementById("km").value);
            const gdansk = document.getElementById("gdansk");
            var kosztDostawy = (km*1)*2;
            var wynik = document.getElementById("wynik");
            if(gdansk.checked){
                wynik.innerHTML = "Dowieziemy Twoją pizzę za darmo";
            }else{
            wynik.innerHTML = "Dowóz będzie Cię kosztował " + kosztDostawy + " zł.";
            }
        };

      //Obliczanie sumy dla elementów z zaznaczonym polem 
        function obliczSume() {
            const numberInputs = document.getElementsByClassName("numberInput");
            const checkboxes = document.getElementsByClassName("checkbox");
            const wynik = document.getElementById("wynik");

            let suma = 0;

            // Iteracja przez pola tekstowe
            for (let i = 0; i < numberInputs.length; i++) {
                const inputValue = parseInt(numberInputs[i].value);

                // Sprawdzenie, czy checkbox jest zaznaczony
                if (checkboxes[i].checked && !isNaN(inputValue)) {
                    suma += inputValue;
                }
            }

            wynik.innerHTML = "Suma liczb: " + suma;
        }

      //Koszt ogłoszeń
        function kosztOgloszen(){
            const liczbaOgloszen = Number.parseInt(document.getElementById("l_ogloszen").value);
            const stalyKlient = document.getElementById("staly_klient");
            var wynik = document.getElementById("wynik");
            var kosztOgloszenia = 0;
            if(liczbaOgloszen <= 50){
                kosztOgloszenia = liczbaOgloszen * 2;
                if(stalyKlient.checked){
                    kosztOgloszenia = Math.round(kosztOgloszenia-(kosztOgloszenia*0.2));
                    wynik.innerHTML = "Koszt ogłoszeń wyniesie: " + kosztOgloszenia + " zł.";
                }else{
                    wynik.innerHTML = "Koszt ogłoszeń wyniesie: " + kosztOgloszenia + " zł.";
                }
            }else if((liczbaOgloszen > 50)&&(liczbaOgloszen <=100)){
                kosztOgloszenia = liczbaOgloszen * 1.5;
                if(stalyKlient.checked){
                    kosztOgloszenia = Math.round(kosztOgloszenia-(kosztOgloszenia*0.2));
                    wynik.innerHTML = "Koszt ogłoszeń wyniesie: " + kosztOgloszenia + " zł.";
                }else{
                    wynik.innerHTML = "Koszt ogłoszeń wyniesie: " + kosztOgloszenia + " zł.";
                }
            }else if(liczbaOgloszen > 100){
                kosztOgloszenia = liczbaOgloszen * 1;
                if(stalyKlient.checked){
                    kosztOgloszenia = Math.round(kosztOgloszenia-(kosztOgloszenia*0.2));
                    wynik.innerHTML = "Koszt ogłoszeń wyniesie: " + kosztOgloszenia + " zł.";
                }else{
                    wynik.innerHTML = "Koszt ogłoszeń wyniesie: " + kosztOgloszenia + " zł.";
                }
            }
        }

      //Koszt Cegieł
        function kosztCegiel(){
            const liczbaCegiel = Number.parseInt(document.getElementById("ilosc_cegiel").value);
            const ceglaPremium = document.getElementById("cegla_premium");
            const wynik = document.getElementById("wynik");
            const ileKm = Number.parseInt(document.getElementById("ileKm").value);
            var cenaZaKm = 0.5;
            var kosztCegly = liczbaCegiel * 2;
            var wagaCegly = liczbaCegiel * 1.5;
            var kosztCeglyPremium = kosztCegly + (kosztCegly*0.3);
            var wagaCeglyPremium = liczbaCegiel * 1.75;
            for(var i=0, j=0.5; i<wagaCegly; i+=10, j+=0.5){
                cenaZaKm = j;
            }
            var kosztDostawy = cenaZaKm * ileKm;
            if(ceglaPremium.checked){
                wynik.innerHTML = `Zakupiona ilość cegieł: ${liczbaCegiel}, cegła premium, koszt zakupu cegieł: ${kosztCeglyPremium}, waga cegieł: ${wagaCeglyPremium},
                koszt dostawy: ${kosztDostawy}`;
            }else{
                wynik.innerHTML = `Zakupiona ilość cegieł: ${liczbaCegiel}, cegła standardowa, koszt zakupu cegieł: ${kosztCegly}, waga cegieł: ${wagaCegly},
                koszt dostawy: ${kosztDostawy}`;
            } 
        }

      //Obliczanie BMI
        function bmi(){
            const wzrostBmi = document.getElementById("wzrostBmi");
            const waga = document.getElementById("waga");
            const wynikBmi = document.getElementById("wynik");
            var bmi = Math.round((waga.value/(wzrostBmi.value*wzrostBmi.value))*10000);
            if(bmi > 25){
                wynikBmi.innerHTML = "Twoje BMI wynosi: " + bmi + ". ZA DUŻO!"; 
            }
            else if(bmi <18.5){
                wynikBmi.innerHTML = "Twoje BMI wynosi: " + bmi + ". ZA MAŁO!";
            }
            else{
                wynikBmi.innerHTML = "Twoje BMI wynosi: " + bmi + ". OK!";
            }
        }

      //Sprawdzanie kto jest starszy
        function starszy(){
            const wynikStarszy = document.getElementById("wynik"); 
            const data1 = document.getElementById("data1").value;
            const data2 = document.getElementById("data2").value;
            const osoba1 =  Date.parse(data1);
            const osoba2 = Date.parse(data2);
            if (isNaN(osoba1) || isNaN(osoba2)) {
                wynikStarszy.innerHTML = "Proszę wprowadzić poprawne daty w formacie RRRR-MM-DD.";
            } else {
                if (osoba1 < osoba2) {
                    wynikStarszy.innerHTML = "Starsza jest osoba nr. 1";
                } else {
                    wynikStarszy.innerHTML = "Starsza jest osoba nr. 2";
                }
            }
        }

      //Sprawdzanie czy rok jest przestepny
        function przestepny(){
            const rok = Number.parseInt(document.getElementById("przestepny").value);
            const wynik = document.getElementById("wynik");
            var tabLata = Array(600);
            var byl = true;
            for (var i=0, j=0; i<tabLata.length; i++, j+=4){
                tabLata[i] = j; 
            }
            for(var i in tabLata){
                if(tabLata[i] == rok){
                    byl = true;;
                    break;
                }else{
                    byl = false;      
                }
            }
            if(byl == true){
                wynik.innerHTML = "Ten rok jest przestępny.";
            }else{
                wynik.innerHTML = "Ten rok nie jest przestępny.";
            }
        }

      //Sprawdzanie siły hasła
        function sila(){
            const haslo = document.getElementById("haslo").value;
            var dlugoscHasla = haslo.length;
            const wynik = document.getElementById("wynik");
            if((dlugoscHasla <= 4)){
                wynik.innerHTML =  "Hasło słabe!!!";
            }else if (dlugoscHasla <= 8) {
                if (!/[0-9]/.test(haslo) || !/[A-Z]/.test(haslo) || !/[a-z]/.test(haslo) || !/[^a-zA-Z0-9]/.test(haslo)) {
                    wynik.innerHTML =  "Hasło słabe - brak wymaganego elementu";
                } else {
                    wwynik.innerHTML =  "Hasło średnie";
                }
            } else {
                if (!/[0-9]/.test(haslo) || !/[A-Z]/.test(haslo) || !/[a-z]/.test(haslo) || !/[^a-zA-Z0-9]/.test(haslo)) {
                    wynikSila.innerHTML = "Hasło słabe - brak wymaganego elementu";
                } else {
                    wynik.innerHTML =  "Hasło mocne";
                }
            }

        }

      //Sprawdzanie czy z podanych przez uzytkownika boków można utworzyć trójkąt
        function trojkat(){
            const a = document.getElementById("bok1").value;
            const b = document.getElementById("bok2").value;
            const c = document.getElementById("bok3").value;
            var wynik = document.getElementById("wynik");
            if (a + b > c && a + c > b && b + c > a) {
                wynik.innerHTML = "Z podanych długości boków można utworzyć trójkąt.";
            } else {
                wynik.innerHTML = "Z podanych długości boków nie można utworzyć trójkąta.";
                
                if (a + b <= c) {
                    wynik.innerHTML = "Warunek a + b > c nie jest spełniony.";
                }
                
                if (a + c <= b) {
                    wynik.innerHTML = "Warunek a + c > b nie jest spełniony.";
                }
                
                if (b + c <= a) {
                    wynik.innerHTML = "Warunek b + c > a nie jest spełniony.";
                }
            }

        }

      //Szyfrowanie znaków
        function szyfr(){
            var wynikszyfr = document.getElementById("wynik");
            var char = event.which || event.keyCode;
            //console.log(char);
    if(char >= 65 && char <= 90){
        char +=2;
        wynikszyfr.innerHTML += String.fromCharCode(char);
    }else{
        wynikszyfr.innerHTML = "To nie alfabet!";
    }

}

    /*    const tabliceResult1 = document.getElementById("tabliceResult1");

        var tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];
        tab1[6]=12;
        tabliceResult1.innerHTML += "Tab1: " + tab1 + "<br>";
        
        var tab2 = Array(10);
        tab2 = tab1;
        tabliceResult1.innerHTML += "Tab2: " + tab2 + "<br>";
        
        var tab3 = Array(10);
        for (var i = 0; i<tab3.length; i++){
            tab3[i] = tab1[i] + tab2[i];
        }
        
        tabliceResult1.innerHTML += "Tab3: " + tab3 + "<br>";
        
        tab2 = tab1.reverse();
        tabliceResult1.innerHTML += "Tab2 reverse: " + tab2 + "<br>";
        
        var tablica1 = Array(10);
        for (var i = 0; i<tablica1.length; i++){
            //tablica1[i] = Number.parseInt(prompt("Podaj zawartość tablicy:"));
            tablica1[i] = Math.floor(Math.random() * (100-1)+1);
        }
        tabliceResult1.innerHTML += "Tablica1 podana przez użytkownika: " + tablica1 + "<br>";
        
        var i = 0;
        var min = tablica1[0];
        while (i<tablica1.length){
            if(min > tablica1[i+1]){
            min = tablica1[i+1];
            }
            i++;
        }
        tabliceResult1.innerHTML += "Najmniejsza wartość w tablicy to: " + min + "<br>";
        
        var j = 0;
        var max = tablica1[0];
        while (j<tablica1.length){
            if(max < tablica1[j+1]){
            max = tablica1[j+1];
            }
            j++;
        }
        tabliceResult1.innerHTML += "Największa wartość w tablicy to: " + max + "<br>";
        
        var suma = 0;
        var sr = 0;
        for (var i = 0; i<tablica1.length; i++){
            suma += tablica1[i];
            sr = suma/tablica1.length
        }
        tabliceResult1.innerHTML += "Średnia wartość wszystkich elementów tablicy wynosi: " + sr + "<br>";
        
        var howMany = 0;
        for (var i = 0; i<tablica1.length; i++){
            if(tablica1[i] == 3){
                howMany += 1;
            }
        }
        tabliceResult1.innerHTML += "W tablicy znajduje sie " + howMany + " wartości 3" + "<br>";
        
        var tablica_2 = tablica1.sort();
        tabliceResult1.innerHTML += "Tablica1 po posortowaniu " + tablica_2 +  "<br>";
        
        var mediana = 0;
        var size = Number.parseInt(tablica1.length);
        
        if (size%2==1){
            var srodek = Math.floor(size/2);
            mediana = tablica1[srodek];
            tabliceResult1.innerHTML += "Mediana elementów tablicy to: " + mediana + "<br>";
            }else{
                var srodek = size/2;
                //console.log(tablica1[half-1]);
                mediana = (tablica1[srodek] + (tablica1[srodek-1]))/2;
                tabliceResult1.innerHTML += "Mediana elementów tablicy to: " + mediana + "<br>";
            }
        
        for(var i = 0; i<3; i++){
            tabliceResult1.innerHTML += 'Trzy najmniejsze elementy: ' + tablica_2[i]+ "<br>";
        }
        document.write("<br>");
        for(var i = tablica_2.length-1; i>tablica_2.length-4; i--){
            tabliceResult1.innerHTML += 'Trzy największe elementy: ' + tablica_2[i]+ "<br>";
        }
        
        for(var i = 0; i<tab2.length; i++){
            tab2[i] *= tab2[i];
        }
        tabliceResult1.innerHTML += "<br>" + "Tablica TAB2 z wartościami podniesionymi do kwadratu: " + tab2;
        
        var parzyste = 0;
        var nieparzyste = 0;
        for(var x in tablica1){
            if(tablica1[x]%2==0)
                parzyste +=1;
            else
            nieparzyste += 1;
        }
        tabliceResult1.innerHTML += "<br>" + "Ilość elementów parzystych w Tablica1: " + parzyste + "<br>" + "Ilość nieparzystych: " + nieparzyste + "<br>";
        
        
        var podzielne3 = 0;
        for(var x in tablica1){
            if(tablica1[x]%3==0)
                podzielne3 +=1;
        }
        tabliceResult1.innerHTML += "Ilość elementów podzielnych przez 3:  " + podzielne3 + "<br>" ;
        
        

        const tab4 = Array(100);
        for (let i=0; i<tab4.length; i++){
          tab4[i] = Math.floor(Math.random()*(1000));
        }
        tabliceResult1.innerHTML += "<br>Tablica 100-elementowa: " + tab4 + "<br>";
      
        tabliceResult1.innerHTML += "<br>Parzyste: " +  "<br>";
        for(let i in tab4){
          if(tab4[i]%2==0)
          tabliceResult1.innerHTML += tab4[i] + ", ";
        }
      
        tabliceResult1.innerHTML +="<br> Elementy o nieparzystych indeksach: " +  "<br>";
        for(let i in tab4){
          if(tab4.indexOf(tab4[i])%2==1)
          tabliceResult1.innerHTML += tab4[i] + ", ";
        }
        tabliceResult1.innerHTML += "<br> W przedziale <5,15): " +  "<br>";
        var wPrzedziale = 0;
        var przedzial = document.getElementById("przedzial");
        for (let i in tab4){
          if((tab4[i]>=5)&(tab4[i]<15)){
              wPrzedziale += 1;
              tabliceResult1.innerHTML = "<br>W przedziale znajduje sie liczb: " + wPrzedziale;
              tabliceResult1.innerHTML += tab4[i] + ", ";
          }
        }
      
      //var a = Number.parseInt(prompt("Podaj wartość a"));
      var roznica = 0;
      var najmniejsza = Math.abs(a-tab4[0]);
      var tymczasowa = tab4[0];
      const closer = document.getElementById("closer");
      tabliceResult1.innerHTML += "<br>a: " + a + "<br>";
      for (let x in tab4){
          roznica = Math.abs(a - tab4[x]);
          if(tab4[x]==a){
            tabliceResult1.innerHTML +="<br>Najbliższa wartość liczby " + a + " to " + tab4[x] + " o indeksie " + tab4.indexOf(tab4[x]);
              break;
          }
          
          else if(najmniejsza > roznica) {
                      najmniejsza = roznica; 
                      tymczasowa = tab4[x];
                      closer.innerHTML = "<br>Element najbliższy wartości użytkownika to: " + tymczasowa;
          }
          else{
              roznica = roznica;
          }
          
      }
      
      var min = tab4[0];
      var poprzednik = 0;
      var nastepnik = 0;
      let k = 0;
      while ( k < tab4.length){
          if(min > tab4[k+1]){
              min = tab4[k+1];
              poprzednik = tab4[k];
              nastepnik = tab4[k+2];
          }
          k++
      }
      if(min == tab4[0]){
          poprzednik = tab4[tab4.length-1];
          nastepnik = tab4[1];
      }
      else if(min == tab4[tab4.length-1]){
          poprzednik = tab4[tab4.length-2];
          nastepnik = tab4[0];
      }
      
      tabliceResult1.innerHTML +="<br>Najmniejsza wartość w tablicy to: " + min + ". Jej poprzednik to: " + poprzednik +", a następnik to: " + nastepnik + "<br>";
      
      const tab5 = Array();
      for(let i=0; i<tab4.length; i++){
          if(tab4[i]>10){
              tab5.push(tab4[i]);
          }
      }
      tabliceResult1.innerHTML += "<br>Zawartość tablicy tab5: " + tab5 + "<br>";
      
      const tab6 = Array(10);
      var silnia = 0;
      function obliczSilnia(wartosc){
          if(wartosc == 1)
             return silnia = 1; 
          else
          return silnia = wartosc * obliczSilnia(wartosc-1);
      };
      //document.write(obliczSilnia(5));
      
      for(var i=0; i<tab6.length; i++){
          tab6[i] = obliczSilnia(tab4[i]);
      }
      document.write("Zawartość tablicy tab6: " + tab6 + "<br>");
      tab4.sort();
      tab4.reverse();
      tabliceResult1.innerHTML +="<br>Tablica posortowana malejąco: <br>" + tab4 + "<br>";
      
      
      
      // Funkcja do znalezienia elementów występujących przynajmniej 2 razy
      function znajdzWystepowania(tab4) {
        var wystepowania = {};
        var wynik = [];
      
        for (var i = 0; i < tab4.length; i++) {
          if (wystepowania[tab4[i]]) {
            wystepowania[tab4[i]]++;
          } else {
            wystepowania[tab4[i]] = 1;
          }
        }
      
        for (var klucz in wystepowania) {
          if (wystepowania[klucz] >= 2) {
            wynik.push(klucz);
          }
        }
      
        return wynik;
      }
      
      // Znalezienie elementów występujących przynajmniej 3 razy
      var elementyPrzynajmniej3Razy = znajdzWystepowania(tab4);
      
      // Wyświetlenie wyniku
      tabliceResult1.innerHTML += "<br>Elementy występujące przynajmniej 2 razy:", elementyPrzynajmniej3Razy;
      
      const tablica = new Array(100);
      for (var i=2; i<tablica.length; i++){
          tablica[0] = 0;
          tablica[1] = 1;
          tablica[i] = tablica[i-2] + tablica[i-1];
      }
      tabliceResult1.innerHTML += "<br>Elementy tablicy odpowiadające pierwszym 100 wartosciom ciągu fibbonaciego: <br>" + tablica + "<br>";
      
      const tablica2 = Array(100);
      for(var i=0, j=2; i<tablica2.length; i++, j*=2){
          tablica2[i] = j;
      }
      tabliceResult1.innerHTML += "<br>Tablica uzupełniona kolejnymi potęgami 2: <br>" + tablica2 + "<br>";
      
      const tablica3 = Array(100);
      for(var i=0, j=3; i<tablica3.length; i++, j+=3){
          tablica3[i] = j;
      }
      tabliceResult1.innerHTML += "<br>Tablica uzupełniona wartościami zwiekszającymi sie co 3: <br>" + tablica3 + "<br>";

        const zadania = document.getElementsByClassName("zadania");
        for (let i=0;i<zadania.length; i++){
            zadania[i].style.display = "none";
        }*/
    
