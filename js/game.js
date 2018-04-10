var game = new Phaser.Game(600, 800, Phaser.AUTO, 'game');


var GameState = {
  preload: function() {

  },

  create: function() {

  },
  update: function() {

  }
}

game.state.add('GameState', GameState);
game.state.start('GameState');
