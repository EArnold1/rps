 $(function() {
   $(".setUp").hide(1)
   setInterval(() => {
     $(".t").slideDown(100)
   }, 50)
   setInterval(() => {
     $(".play").fadeOut(1000)
     $(".play").fadeIn(1000)
     $(".tab").slideUp(1000)
     $(".tab").slideDown(1000)
   }, 1000)

   let rock = document.querySelector("#rock");
   let paper = document.querySelector("#paper");
   let scissors = document.querySelector("#scissors");
   let out = document.querySelector(".out");
   let bodi = document.querySelector(".bodi");
   let pScore = document.querySelector("#pScore");
   let cScore = document.querySelector("#cScore");
   let start = document.querySelector(".start")
   start.addEventListener("click", gamePlay)
   let v;
   let RPS = ["rock", "paper", "scissors"]
   let score1 = 1;
   let score2 = 1;

   function gamePlay() {
     $(".setUp").fadeIn(2000)
     $(".start").hide()
     $(".instruction").hide()
     rock.addEventListener("click", fRock);

     function fRock() {
       const random = Math.floor(Math.random() * RPS.length)
       out.innerHTML = RPS[random].toUpperCase();
       setInterval(() => {
         $("#paper").fadeOut(999)
         $("#scissors").fadeOut(999)
         $("#paper").fadeIn(999)
         $("#scissors").fadeIn(999)
       }, 50)
       v = 'r';
       valid1();
     }

     paper.addEventListener("click", fPaper);

     function fPaper() {
       const random = Math.floor(Math.random() * RPS.length)
       out.innerHTML = RPS[random].toUpperCase();
       /*  $(".bodi").removeClass("bg-warning bg-danger")
         $(".bodi").addClass("bg-primary")*/
       setInterval(() => {
         $("#rock").fadeOut(999)
         $("#scissors").fadeOut(999)
         $("#rock").fadeIn(999)
         $("#scissors").fadeIn(999)
       }, 50)
       v = 'p';
       valid2();
     }
     scissors.addEventListener("click", fScissors);

     function fScissors() {
       const random = Math.floor(Math.random() * RPS.length)
       out.innerHTML = RPS[random].toUpperCase();
       /* $(".bodi").removeClass("bg-danger bg-primary")
        $(".bodi").addClass("bg-warning")*/
       //$("#rock,#paper").fadeOut(999)
       setInterval(() => {
         $("#paper").fadeOut(999)
         $("#rock").fadeOut(999)
         $("#paper").fadeIn(999)
         $("#rock").fadeIn(999)
       }, 50)
       v = 's';
       valid3();
     }

     function valid1() {
       if (v == 'r' && out.innerHTML == "ROCK") {
         $(".out").text("")
         $(".out").removeClass("fa fa-hand-paper-o fa fa-hand-scissors-o")
         $(".out").addClass("fa fa-hand-rock-o")
       } else if (v == "r" && (out.innerHTML == "SCISSORS")) {
         $("#pScore").text(score1++)
         $(".out").text("")
         $(".out").removeClass("fa fa-hand-paper-o fa fa-hand-rock-o")
         $(".out").addClass("fa fa-hand-scissors-o")
       }
       else {
         $("#cScore").text(score2++)
         $(".out").text("")
         $(".out").removeClass("fa fa-hand-rock-o fa fa-hand-scissors-o")
         $(".out").addClass("fa fa-hand-paper-o")
       }
     }

     function valid2() {
       if (v == 'p' && out.innerHTML == "PAPER") {
         $(".out").text("")
         $(".out").removeClass("fa fa-hand-rock-o fa fa-hand-scissors-o")
         $(".out").addClass("fa fa-hand-paper-o")
       } else if (v == "p" && (out.innerHTML == "ROCK")) {
         $(".out").text("")
         $(".out").removeClass("fa fa-hand-paper-o fa fa-hand-scissors-o")
         $(".out").addClass("fa fa-hand-rock-o")
         $("#pScore").text(score1++)
       }
       else {
         $("#cScore").text(score2++)
         $(".out").text("")
         $(".out").removeClass("fa fa-hand-paper-o fa fa-hand-rock-o")
         $(".out").addClass("fa fa-hand-scissors-o")
       }
     }

     function valid3() {
       if (v == 's' && out.innerHTML == "SCISSORS") {
         $(".out").text("")
         $(".out").removeClass("fa fa-hand-paper-o fa fa-hand-rock-o")
         $(".out").addClass("fa fa-hand-scissors-o")
       } else if (v == "s" && (out.innerHTML == "PAPER")) {
         $("#pScore").text(score1++)
         $(".out").text("")
         $(".out").removeClass("fa fa-hand-rock-o fa fa-hand-scissors-o")
         $(".out").addClass("fa fa-hand-paper-o")
       }
       else {
         $("#cScore").text(score2++)
         $(".out").text("")
         $(".out").removeClass("fa fa-hand-paper-o fa fa-hand-scissors-o")
         $(".out").addClass("fa fa-hand-rock-o")
       }
     }

     function display() {
       if (out.innerHTML == "ROCK") {
         $(".out").text("")
         let elem = $("<p class ='display-4 fa fa-hand-rock-o'></p>");
         $(".out").append(elem);
       }
     }
   }
 })