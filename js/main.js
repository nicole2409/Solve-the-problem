var playerPoints=0;// zmienna przechowuje sume punktów uzyskanych przez gracza
var computerPoints=0;// zmienna przechowuje sume punktów uzyskanych przez komputer
var playerPoint=0;// zmienna przechowuje bieżący punkt uzyskany w grze przez gracza
var computerPoint=0;// zmienna przechowuje bieżący punkt uzyskany w grze przez komputera

// Pobieranie tekstu problemu z okienka i wyświetlenie go w widoku gry (okno activ)

document.getElementById("getProblem").addEventListener("click", function getProblem(){

  var text = document.getElementById("problem").value;
  console.log(text);
  document.querySelector("#active-window h5").innerHTML=text;

  // zmiana podstrony na widok gry

  document.querySelector(".querybox").style.display = "none";
  document.querySelector(".game").style.display = "block";

});



/// funkcja walidacji danych w textarea max 50 znaków + blokowanie przycisku przy ilości wiekszej niż 50 naków
document.querySelector(".form-control").addEventListener("keydown", function (){
  var text = document.getElementById("problem").value;
  if (text.length>50){
      document.querySelector(".querybox h6").innerHTML="Permitted number of characters: 50";
      var disabled = document.createAttribute("disabled");
      document.getElementById("getProblem").attributes.setNamedItem(disabled);
  }

   else{document.querySelector(".querybox h6").innerHTML="";
        document.getElementById("getProblem").removeAttribute("disabled");}
});



document.getElementById("seeSolution").addEventListener("click", function seeSolution(){

document.querySelector(".game").style.display = "none";
document.querySelector(".solution").style.display = "block";

});




// zmiana strony widok step 1 (powrót do podstrony widoku głównego gry )
document.getElementById("nextgame").addEventListener("click", function getProblem(){
document.querySelector(".solution").style.display = "none";
document.querySelector(".querybox").style.display = "block";
newGame();

});






/*kodowanie prycisków wyboru figrury akcji (ruch gracza)
1 - akcji przycisku papier
2 - akcji przycisku kamień
3 - akcji przycisku nożyczki*/

/*1*/document.getElementById("paper").addEventListener("click", function (){

playerPoint=0;
computerMove(); // wołanie animacji ruchu komputera (papier)
gamePoint();// funkcja przyznająca pojedyńczy punkt
blockButtons();// funkcja blikująca przyciski PAPIER,KAMIEN,NOŻYCE

paperMove(); // wołanie animacji ruchu gracza (papier)



});

/*2*/document.getElementById("stone").addEventListener("click", function (){

playerPoint=1;
computerMove(); // wołanie animacji ruchu komputera (kamien)
gamePoint();// funkcja przyznająca pojedyńczy punkt
blockButtons();// funkcja blikująca przyciski PAPIER,KAMIEN,NOŻYCE
stoneMove();// wołanie animacji ruchu gracza (kamien)


});
/*3*/document.getElementById("scissors").addEventListener("click", function (){

playerPoint=2;
computerMove(); // wołanie animacji ruchu komputera (nożyczki)
gamePoint();// funkcja przyznająca pojedyńczy punkt
blockButtons();// funkcja blikująca przyciski PAPIER,KAMIEN,NOŻYCE
scissorsMove();// wołanie animacji ruchu gracza (nożyczki)
});



/* funkcja odczytuje wartość zmiennej pomocniczej playerPoint i na podstawie wartości przyznaje
 punkty do zmiennej playerPoints przechowującą całkowitą ilość punktów zdobytej w grze */
function gamePoint(){
switch(playerPoint){

      case 0:
      {
        console.log('grac wybral papier');
         if (computerPoint===0){console.log('remis');}
         else if (computerPoint===1){playerPoints+=1;console.log('Gracz zdobył punkt');}
         else if (computerPoint===2){computerPoints+=1;console.log('Komputer dobył punkt');}
         else {console.log('Wystąpił błąd');}
       } break;

       case 1:
       {
         console.log('grac wybral kamien');
         if (computerPoint===0){computerPoints+=1;console.log('Komputer zdobył punkt');}
         else if (computerPoint===1){console.log('remis');}
         else if (computerPoint===2){playerPoints+=1;console.log('Gracz zdobył punkt');}
         else {console.log('Wystąpił błąd');}
       }break;


      case 2:
      {
        console.log('grac wybral noyczki');
        if (computerPoint===0){playerPoints+=1;console.log('Gracz zdobył punkt');}
        else if (computerPoint===1){computerPoints+=1;console.log('Komputer dobył punkt');}
        else if (computerPoint===2){console.log('remis');}
        else {console.log('Wystąpił błąd');}
      }

    }
    console.log('Tyle masz punktów');
    console.log(playerPoints);
    console.log('Tyle komputer ma punktów');
    console.log(computerPoints);
    document.querySelector('#scorearea h4').innerHTML=playerPoints+' : '+ computerPoints;
    endGame();
}


///funkcja blokująca przycisk "seesolution" jak gracz albo computer nie uzyskał wymaganych 3 pkt

function blockButtonSolution(){

  if ((computerPoints===3)||(playerPoints===3)){
      document.getElementById("seeSolution").removeAttribute("disabled");
  }
  else{
           var disabled = document.createAttribute("disabled");
           document.getElementById("seeSolution").attributes.setNamedItem(disabled);
  }
}

// koduje wydarzeia wywoływane po zakończenu gry
function endGame(){
 blockButtonSolution();

if (playerPoints===3){
console.log('Koniec gry');
document.querySelector('.solution h5').innerHTML="You won!!! Congratulations";
hiddenButtons();
}

else if (computerPoints===3){

  console.log('Koniec gry');

document.querySelector('.solution h5').innerHTML="You lost. I'm sorry, but you can try again!";
hiddenButtons();

}

}

// funkcja ukrywająca przyciski PAPIER,KAMIEŃ,NOŻYCE
function hiddenButtons(){
  document.getElementById("paper").style.display ="none";// zmiana kolorów przycisku na nieaktywny
document.getElementById("stone").style.display ="none";
document.getElementById("scissors").style.display ="none";}

// funkcja pokazująca przyciski PAPIER,KAMIEŃ,NOŻYCE
function showButtons(){  document.getElementById("paper").style.display ="block";// zmiana kolorów przycisku na nieaktywny
document.getElementById("stone").style.display ="block";
document.getElementById("scissors").style.display ="block";}




// funkcja blokujaca przyckiski PAPIER, KAMIEŃ, NOŻYCE
function blockButtons(){
  var disabled = document.createAttribute("disabled");// tworzenie zmiennych z atrybutem dla przycosków
  var disabled2 = document.createAttribute("disabled");
  var disabled3 = document.createAttribute("disabled");
  document.getElementById("paper").attributes.setNamedItem(disabled);// dodanie atrybutu do klasy w celu zablokowanie przycisków
  document.getElementById("stone").attributes.setNamedItem(disabled2);
  document.getElementById("scissors").attributes.setNamedItem(disabled3);

  document.getElementById("paper").style.background ="grey";// zmiana kolorów przycisku na nieaktywny
  document.getElementById("stone").style.background ="grey";
  document.getElementById("scissors").style.background ="grey";



}


// funkcja odblokowywująca przyciski PAPIER,KAMIEŃ, NOŻYCE
function unlockButtons(){
document.getElementById("paper").removeAttribute("disabled");
document.getElementById("stone").removeAttribute("disabled");
document.getElementById("scissors").removeAttribute("disabled");

document.getElementById("paper").style.background ="rgba(0, 0, 0, 0.4)";
document.getElementById("stone").style.background ="rgba(0, 0, 0, 0.4)";
document.getElementById("scissors").style.background ="rgba(0, 0, 0, 0.4)";

}




// koduje wydarzeia wywoływane po zakończenu gry i uruchomieniu nowej rundy
function newGame(){  // funkcja odblokowywująca przyciski gry i czyszcząca pola po skończonej grze

 playerPoints=0;// zmienna przechowuje sume punktów uzyskanych przez gracza
 computerPoints=0;// zmienna przechowuje sume punktów uzyskanych przez komputer
 playerPoint=0;// zmienna przechowuje bieżący punkt uzyskany w grze przez gracza
 computerPoint=0;// zmienna przechowuje bieżący punkt uzyskany w grze przez komputera

var text=document.querySelector("textarea").value=""; // czyszczenie okna textarea
unlockButtons();// funkcja odblokowywująca przyciski PAPIER,KAMIEŃ, NOŻYCE
blockButtonSolution();
showButtons();

}
