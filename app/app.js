let growingScore = 0;
    score = document.querySelector('.score');
    
score.innerHTML = growingScore;
// KR - all personal comments have identifier KR.
//KR - Issues with ES6 class. I had to use the initial enemy class definition to make the code work.

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
      // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if (this.x >= 505) {
        this.x = -50;
    }
    //KR - Collision logic
    if ( this.x + 65 > player.x && player.x + 55 > this.x && this.y + 45 > player.y && player.y + 65 > this.y) {
        player.x = 202;
        player.y = 404;
        this.speed = 0;
        showModal();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Figure {
  constructor(x,y) {
    this.sprite = 'images/char-cat-girl.png';
    this.x = x;
    this.y = y;
  }
  
  update() {
    // KR - fix the score bug!
  if (this.y < 0) {
    growingScore++;
    let score = document.querySelector('.score');
    score.innerHTML = growingScore;
       setTimeout(() => {
             this.x = 202;
             this.y = 404;
           }, 700);
   }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(move) {
    if (move === "left" && this.x > 0) {
     this.x -= 101;
   } else if (move === "up" && this.y > 0) {
     this.y -= 83;
   } else if (move === "right" && this.x < 400) {
     this.x += 101;
   } else if (move === "down" && this.y < 404) {
     this.y += 83;
    }
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let player = new Figure(202, 404);

let enemy1 = new Enemy(0, 60, (Math.random() * 700));
let enemy2 = new Enemy(-50, 140, (Math.random() * 600));
let enemy3 = new Enemy(-150, 220, (Math.random() * 400));

//let allEnemies = [enemy1];
let allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//Modal function
let gameOverModal = document.querySelector('.game-over-modal');

 function showModal() {

  let totalScore = document.querySelector('.total-score');
  totalScore.innerHTML= 'Your score: ' + growingScore;
  gameOverModal.style.display='block';
  }

  document.addEventListener('DOMContentLoaded', function () {
   document.querySelector('.modal-restart').addEventListener('click',function() {
     gameOverModal.style.display='none';
      window.location.reload();
   });
 });
