var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

var cat;
var cursors;

var GameState = {
  preload: function() {
game.load.image('pusheenCat', 'assets/pusheenCat.jpg');
  },

  create: function() {
    cat = game.add.sprite(game.world.centerX, game.world.centerY, 'pusheenCat');
    cat.anchor.setTo(0.5, 0.5); //puts image to center
    cat.alpha = 0.1;

    cursors = game.input.keyboard.createCursorKeys();
    cat.scale.setTo(0.25);
    //s.rotation = -0.14;
  },
  update: function() {
    cat.angle += 0.1; //kampas po 1 laipsni
    cat.alpha = Math.abs(Math.sin(cat.angle/10));
    collisionWithBorder();
    if (cursors.up.isDown){
      cat.y--;
    }
    if (cursors.down.isDown){
      cat.y++;
    }
    if (cursors.left.isDown){
      cat.x--;
    }
    if (cursors.right.isDown){
      cat.x++;
    }
  }
}
//lango dydis
//game.width ir game.height
var collisionWithBorder = function(){
  if (cat.x-cat.width/2 < 0) { //kairysis krastas
      cat.x = 0 + cat.width/2;
  }
  if(cat.x+cat.width/2 > game.width){
      cat.x = game.width - cat.width/2;
  }
  if (cat.y-cat.height/2 < 0) { 
      cat.y = 0 + cat.height/2;
  }
  if(cat.y+cat.height/2 > game.height){
      cat.y = game.height - cat.height/2;
  }
}
game.state.add('GameState', GameState);
game.state.start('GameState');
