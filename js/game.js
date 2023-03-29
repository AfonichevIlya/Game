function playMario() { 
 
    function move() {
      let elem2 = document.getElementById("obstacle1");
      let pos2 = 900;
      let od = setInterval(move1);
      function random1(max) {
        return Math.floor(Math.random() * max);
      }
      function move1(lala) {
        lala = random1(9);
        if (pos2 == -40) {
          console.log(lala);
          if (lala == 0) {
            elem2.style.backgroundColor = "purple";
            elem2.style.width = 50 + "px";
            elem2.style.height = 60 + "px";
          } else if (lala == 1) {
            elem2.style.backgroundColor = "red";
            elem2.style.width = 60 + "px";
            elem2.style.height = 20 + "px";
          } else if (lala == 2) {
            elem2.style.backgroundColor = "green";
            elem2.style.width = 30 + "px";
            elem2.style.height = 95 + "px";
          } else if (lala == 3) {
            elem2.style.backgroundColor = "blue";
            elem2.style.width = 40 + "px";
            elem2.style.height = 70 + "px";
          } else if (lala == 4) {
            elem2.style.backgroundColor = "Tomato";
            elem2.style.width = 40 + "px";
            elem2.style.height = 170 + "px";
          } else if (lala == 5){
            elem2.style.backgroundColor = "violet";
            elem2.style.width = 40 + "px";
            elem2.style.height = 220 + "px";
          } else if (lala == 6){
            elem2.style.backgroundColor = "PaleVioletRed";
            elem2.style.width = 20 + "px";
            elem2.style.height = 100 + "px";
          } else if (lala == 7){
            elem2.style.backgroundColor = "Indigo";
            elem2.style.width = 30 + "px";
            elem2.style.height = 190 + "px";
          } else if (lala == 8){
            elem2.style.backgroundColor = "BurlyWood";
            elem2.style.width = 50 + "px";
            elem2.style.height = 200 + "px";
          }else if (lala == 9){
            elem2.style.backgroundColor = "IndianRed";
            elem2.style.width = 50 + "px";
            elem2.style.height = 210 + "px";
          }
          pos2 = 910;
          pos2--;
          elem2.style.left = pos2 + "px";
        } else {
          pos2--;
          elem2.style.left = pos2 + "px";
        }
      }
    }
    move();
    document.addEventListener("keydown", function(event) { 
      if (event.code === "KeyF") {
         myMove();
         sound()
      }
      });
      document.addEventListener("keydown", function(event) { 
      if (event.shiftKey && event.code === "KeyD") {
         myMove2();
         sound()
      }
    });
    function sound() {
      let audio = new Audio()
      audio.src = "maro-jump-sound-effect_1.mp3"
      audio.autoplay = true;
      audio.volume=0.08;
    }
    function sound2() {
      let musik = new Audio()
      musik.src = "super-mario-saundtrek.mp3"
      musik.autoplay = true; 
      musik.volume=0.2;
         }
    sound2()
      function myMove2() {
        let elem1 = document.getElementById("animate");
      let pos = 0;
      let id = setInterval(frame);
      function frame() {
        if (pos == 300) {
          let id1 = setInterval(down);
          function down() {
            if (pos == 0) {
              clearInterval(id);
            } else {
              pos--;
              elem1.style.bottom = pos + "px";
            }
          }
        } else {
          pos++;
          elem1.style.bottom = pos + "px";
        }
      }
        
      }

    function myMove() {
      let elem1 = document.getElementById("animate");
      let pos = 0;
      let id = setInterval(frame);
      function frame() {
        if (pos == 150) {
          let id1 = setInterval(down);
          function down() {
            if (pos == 0) {
              clearInterval(id);
            } else {
              pos--;
              elem1.style.bottom = pos + "px";
            }
          }
        } else {
          pos++;
          elem1.style.bottom = pos + "px";
        }
      }
    } 
    let ddd = document.querySelector(".schetchik")
    
    
    let score = 0
    function scorePlus() {
     
      let rect = animate.getBoundingClientRect();
      let rect2 = obstacle1.getBoundingClientRect();
        if (rect.x === rect2.x ) {
        score++
      }
      ddd.innerHTML = score
    }
   setInterval(scorePlus)
        function reload() {
        location.reload();
      }  
    
    let timeRect = setInterval(time1);
    function time1() {
        let rect = animate.getBoundingClientRect();
        let rect2 = obstacle1.getBoundingClientRect();
        let time1 = true;
         
         if (rect.bottom < rect2.top) {
           time1 = false;
          }
          if (rect.top > rect2.bottom) {
            time1 = false;
          }
          if (rect.right < rect2.left) {
            time1 = false;
          }
          if (rect.left > rect2.right) {
            time1 = false;
          }
          
          if (time1) {
         sound  = false;
         clearTimeout(sound2)
          let lol =  document.getElementById("obstacle1");
          lol.remove()  
          let lala = document.getElementById("animate")  
          lala.remove()
          ddd.remove()
          let haha = document.getElementById("pon")
          haha.remove()
          let aga = document.getElementById("container")
          aga.style.backgroundImage = "none"
          aga.style.backgroundColor = "rgb(155,109,232)"
          aga.style.textAlign = "center"
          aga.style.paddingTop = "30px"
          aga.style.height = "170px"
          aga.style.borderRadius = "20px"

          

          aga.innerHTML = `<h1 style="color:black ">Вы проиграли! <br/ ><h1 style="color:black" >Ваш счет: <span style="color:black" class = "score">${score}<span></h1></h1>`
        setInterval(reload,4000)
        let ga = document.getElementById("ha")
        ga.remove()
        }
      }
        
      
  
  }
   






function play() {
const box = document.getElementById("game")
const context = box.getContext("2d")

const mario = new Image()
const city = new Image()
const floor = new Image()
const pipeup = new Image()
const pipebottom = new Image()
const hidden = document.querySelector(".text1");
const textStopGame = document.querySelector(".textStopGame");


mario.src="img/mario.png"
city.src="img/city.png"
floor.src="img/floor.png"
pipeup.src="img/pipeup.png"
pipebottom.src="img/pipebottom.png"


const score_mp3 = new Audio();
const fon_mp3 = new Audio();

score_mp3.src="mp3/score.mp3";
score_mp3.volume = 0.3

fon_mp3.src="mp3/фон.mp3";
fon_mp3.volume = 0.1


let xPos = 10;
let yPos = 150;
let gap = 90;
let score = 0;
const gravitation = 1.5;


addEventListener("keydown", function(event) {
    {
    yPos -= 25
    }
  });
var pipes = [];

pipes[0]  = {
   x : box.width,
   y : 0 
}
function StopGameReload()  {
 
 textStopGame.innerHTML =  `<h1 style="color: ">Вы проиграли! <br/ ><h1 class="score2">Ваш счет: <span class = "score">${score}<span></h1></h1>`;
 setTimeout(Reloading, 4000)
}
function Reloading() {
  location.reload();
}
function draw() {
  context.drawImage(city, 0, 0)
    fon_mp3.play();
    for (i=0; i<pipes.length; i++) {
      context.drawImage(pipeup, pipes[i].x , pipes[i].y -30 )
      context.drawImage(pipebottom, pipes[i].x, pipes[i].y + pipeup.height + gap )
    
    pipes[i].x--;

    if(pipes[i].x == 125) {
        pipes.push({
            x : box.width,
            y : Math.floor(Math.random()*pipeup.height) - pipeup.height + 40
        })
        }
    

        if(xPos + mario.width >= pipes[i].x
            && xPos <= pipes[i].x + pipeup.width 
            && (yPos <= pipes[i].y + pipeup.height - 40
            || yPos + mario.height >= pipes[i].y + pipeup.height + gap) || 
            yPos + mario.height >= box.height - floor.height + 13)  { 
            
              box.remove();
             
              hidden.remove();
              fon_mp3.volume = 0;
              fon_mp3.pause();
              score_mp3.volume = 0;
              score_mp3.pause();
              
              StopGameReload()
              score.pause();
              
               
            
          }
            if(pipes[i].x == 5  ) {
                score++
                score_mp3.play();
            }
    }
    context.drawImage(floor, 0, box.height - floor.height )
    context.drawImage(mario, xPos, yPos, 38, 40)
    
    yPos  += gravitation;
    context.fillStyle = "#black";
    context.font = "24px Times New Roman";
    context.fillText("Счет: " + score, 10, box.height - 20);



    requestAnimationFrame(draw)
    
}

pipebottom.onload = draw;

}
