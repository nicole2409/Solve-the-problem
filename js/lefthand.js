
/*W TYM PLIKU ODKODOWANA JEST ANIMACJA LEWEJ RĘKI
( NADAWANIE PUNKTOW I PRZELACZANIE STRON ZNAJDUJE SIE W PLIKU MAIN.JS*/




function computerMove(){
  computerPoint = Math.floor(Math.random() * 3);
  console.log(computerPoints);

  if(computerPoint  === null) // warunek wykonywany jak komputer ne zdarzy wylosować
   {
     computerPoint=1;
    }

if(computerPoint===0){
paperMoveComputer(); // animacja papier komputera
}
else if (computerPoint===1){
  stoneMoveComupter();// animacja kamien komputera
}

else if (computerPoint===2){scissorsMoveComputer();}// animacja nożyczki komputera
}






















/*animacje ręki lewej (komputera) podczas gry
1-ruch podastawowy
2-akcja papier
3-akcja kamien
4-akcja noyczki*/

/// 1+2- akcja papier

 function paperMoveComputer(){
document.getElementById("rekalewa").className="rekalewa_active";

  //2-akcja papier
  document.querySelector(".rekalewa_active").addEventListener("animationend", function(){

  document.getElementById("rekalewa").style.display="none";
  document.getElementById("kamienlewa").style.display="none";
  document.getElementById("nozyczkilewa").style.display="none";
  document.getElementById("papierlewa").style.display="inline-block";
  setTimeout(unlockButtons,1600); // funkcja odblokowuwująca przyciski PAPIER,KAMIEN,NOZYCE
  setTimeout(clearr,1200);});}

//1+3-akcja kamien

 function stoneMoveComputer(){
document.getElementById("rekalewa").className="rekalewa_active";

  //3-akcja kamien
  document.querySelector(".rekalewa_active").addEventListener("animationend", function(){

  document.getElementById("rekalewa").style.display="none";
  document.getElementById("papierlewa").style.display="none";
  document.getElementById("nozyczkilewa").style.display="none";
  document.getElementById("kamienlewa").style.display="inline-block";
  setTimeout(unlockButtons,1600); // funkcja odblokowuwująca przyciski PAPIER,KAMIEN,NOZYCE
  setTimeout(clearr2,1200);});}

  //1+4-akcja nozyczki

function scissorsMoveComputer(){
  document.getElementById("rekalewa").className="rekalewa_active";

    //4-akcja nozyczki
    document.querySelector(".rekalewa_active").addEventListener("animationend", function(){

    document.getElementById("rekalewa").style.display="none";
    document.getElementById("papierlewa").style.display="none";
    document.getElementById("kamienlewa").style.display="none";
    document.getElementById("nozyczkilewa").style.display="inline-block";
  setTimeout(unlockButtons,1600); // funkcja odblokowuwująca przyciski PAPIER,KAMIEN,NOZYCE
    setTimeout(clearr3,1200);});}




  /// zmiana klasy z aktywnej na  nieaktywną i wyświetlenie wyjściowej pozycji ręki
  function clearr(){document.getElementById("rekalewa").removeAttribute('class', 'rekalewa_active');
  document.getElementById("rekalewa").setAttribute('class', 'rekalewa');
  document.getElementById("rekalewa").style.display="inline-block";
  document.getElementById("papierlewa").style.display="none";}

  function clearr2(){document.getElementById("rekalewa").removeAttribute('class', 'rekalewa_active');
  document.getElementById("rekalewa").setAttribute('class', 'rekalewa');
  document.getElementById("rekalewa").style.display="inline-block";
  document.getElementById("kamienlewa").style.display="none";}

  function clearr3(){document.getElementById("rekalewa").removeAttribute('class', 'rekalewa_active');
  document.getElementById("rekalewa").setAttribute('class', 'rekalewa');
  document.getElementById("rekalewa").style.display="inline-block";
  document.getElementById("nozyczkilewa").style.display="none";}
