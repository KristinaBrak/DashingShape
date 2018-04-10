var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

var cat;

var GameState = {
  preload: function() {
game.load.image('pusheenCat', 'assets/pusheenCat.jpg');
  },

  create: function() {
    cat = game.add.sprite(game.world.centerX, game.world.centerY, 'pusheenCat');
    cat.anchor.setTo(0.5, 0.5); //puts image to center
    //s.rotation = -0.14;
  },
  update: function() {
    cat.angle += 1; //kampas po 1 laipsni
  }
}

game.state.add('GameState', GameState);
game.state.start('GameState');
