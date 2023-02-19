

//code for dropping squares below here
const body = document.querySelector("body");

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.left = `${Math.random() * window.innerWidth}px`;
  square.style.top = "-50px";
  body.appendChild(square);

  function animateSquare() {
    const y = parseInt(square.style.top);
    if (y < window.innerHeight) {
      square.style.top = `${y + 5}px`;
      requestAnimationFrame(animateSquare);
    } else {
      square.remove();
    }
  }

  requestAnimationFrame(animateSquare);
}

setInterval(createSquare, 500);
//end of dropping squares
//Character class
class Character {
    constructor(element) {
       this.element = element;
    }
   
   push() {
      if (this.element.classList.contains("pushing")) {
         return;
      }
      
      sfx.push.play();
      this.element.classList.add("pushing");
      setTimeout(() => {
         this.element.classList.remove("pushing");
      }, 600)
   }
   
   boost() {
      if (this.element.classList.contains("walking")) {
         return;
      }
      
      sfx.boost.play();
      this.element.classList.add("walking");
      setTimeout(() => {
         this.element.classList.remove("walking");
      }, 1000)
   }
}


//Init
(function() {
   var player = new Character(document.querySelector(".character"));
   
   document.querySelector(".button-a").addEventListener("click", () => {
      player.push();
   })
   document.querySelector(".button-b").addEventListener("click", () => {
      player.boost();
   })
   
   document.querySelector(".play-music").addEventListener("click", () => {
      if (!music.overworld.playing()) {
         music.overworld.play();
      }
   })
   document.querySelector(".stop-music").addEventListener("click", () => {
       music.overworld.pause();
   })
   
})(); 

