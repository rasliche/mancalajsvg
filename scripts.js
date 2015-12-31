// This is the logic for the Mancala game
var MancalaGame = {
  board: {
    'A' : [4,4,4,4,4,4,0],
    'B' : [4,4,4,4,4,4,0]
  },

  // Takes a side and a house index (0-5, 6 is the store)
  // Moves the gems
  move: function(side, house) {
    var originHouse = house;
    var originSide = side;
    for (var gems = this.board[side][house]; gems > 0; gems -=1) {
      console.log("Entered for loop");
      console.log(gems+" "+house);
      house += 1;
      if (this.board[side][house] === undefined) {
        console.log("Switched sides");
        side = side === 'A' ? 'B' : 'A';
        house = 0;
        this.board[side][house] += 1;
      } else {
        console.log("Dropped a gem in a house");
        this.board[side][house] += 1;
      }
    }
    this.board[originSide][originHouse] = 0;
    return true;
  },

  // If a side is empty, the game is over and the sum of all gems on
  // a players side and in their store should result in a winner.
  // It is possible to tie.
  checkForWin: function() {

  },

  moveIsValid: function() {}

};
