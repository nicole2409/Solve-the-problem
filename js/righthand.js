
/*W TYM PLIKU ODKODOWANA JEST ANIMACJA PRAWEJ RĘKI
( NADAWANIE PUNKTOW I PRZELACZANIE STRON ZNAJDUJE SIE W PLIKU MAIN.JS*/



/*animacje ręki prawej ( gracza) podczas gry
1-ruch podastawowy
2-akcja papier
3-akcja kamien
4-akcja noyczki*/

/// 1+2- akcja papier

 function paperMove(){
document.getElementById("rekaprawa").className="rekaprawa_active";

  //2-akcja papier
  document.querySelector(".rekaprawa_active").addEventListener("animationend", function(){

  document.getElementById("rekaprawa").style.display="none";
  document.getElementById("kamienprawa").style.display="none";
  document.getElementById("nozyczkiprawa").style.display="none";
  document.getElementById("papierprawa").style.display="inline-block";
  setTimeout(unlockButtons,1600); // funkcja odblokowuwująca przyciski PAPIER,KAMIEN,NOZYCE
  setTimeout(clear,1200);


});}

//1+3-akcja kamien

 function stoneMove(){
document.getElementById("rekaprawa").className="rekaprawa_active";

  //3-akcja kamien
  document.querySelector(".rekaprawa_active").addEventListener("animationend", function(){

  document.getElementById("rekaprawa").style.display="none";
  document.getElementById("papierprawa").style.display="none";
  document.getElementById("nozyczkiprawa").style.display="none";
  document.getElementById("kamienprawa").style.display="inline-block";
setTimeout(unlockButtons,1600);// funkcja odblokowuwująca przyciski PAPIER,KAMIEN,NOZYCE
  setTimeout(clear2,1200);


});}

  //1+4-akcja nozyczki

function scissorsMove(){
  document.getElementById("rekaprawa").className="rekaprawa_active";

    //4-akcja nozyczki
    document.querySelector(".rekaprawa_active").addEventListener("animationend", function(){

    document.getElementById("rekaprawa").style.display="none";
    document.getElementById("papierprawa").style.display="none";
    document.getElementById("kamienprawa").style.display="none";
    document.getElementById("nozyczkiprawa").style.display="inline-block";
   setTimeout(unlockButtons,1600);// funkcja odblokowuwująca przyciski PAPIER,KAMIEN,NOZYCE
    setTimeout(clear3,1200);


  });}


  /// zmiana klasy z aktywnej na  nieaktywną i wyświetlenie wyjściowej pozycji ręki
  function clear(){document.getElementById("rekaprawa").removeAttribute('class', 'rekaprawa_active');
  document.getElementById("rekaprawa").setAttribute('class', 'rekaprawa');
  document.getElementById("rekaprawa").style.display="inline-block";
  document.getElementById("papierprawa").style.display="none";}

  function clear2(){document.getElementById("rekaprawa").removeAttribute('class', 'rekaprawa_active');
  document.getElementById("rekaprawa").setAttribute('class', 'rekaprawa');
  document.getElementById("rekaprawa").style.display="inline-block";
  document.getElementById("kamienprawa").style.display="none";}

  function clear3(){document.getElementById("rekaprawa").removeAttribute('class', 'rekaprawa_active');
  document.getElementById("rekaprawa").setAttribute('class', 'rekaprawa');
  document.getElementById("rekaprawa").style.display="inline-block";
  document.getElementById("nozyczkiprawa").style.display="none";}
