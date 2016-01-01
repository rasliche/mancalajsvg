// This is the logic for the Mancala game
var MancalaGame = {
  turn: 'A',

  endTurn: function() {
    this.checkForWin(turn);
    turn = (turn === 'A') ? 'B' : 'A';
  },

  board: {
    'A' : [4,4,4,4,4,4,0],
    'B' : [4,4,4,4,4,4,0]
  },

  // Takes a house index (0-5, 6 is the store)
  // Moves the gems
  move: function(house) {
    var originHouse = house;
    var originSide = this.turn;
    var side = this.turn
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
  // It is possible to tie. Run check after a turn before changing
  // sides
  checkForWin: function() {
    var opp = this.turn === 'A' ? this.board['B'] : this.board['A'];
    var total = 0;
    for (var h = 0; h<6; h++) {
      total+= this.board[this.turn][h];
    }
    if (total === 0) {
      // If 'side' is empty, then we know their store (side[6]) is
      // their total. opp.reduce() to get opp score, then compare
      var oppTotal = opp.reduce(function(acc, c) {
        return acc + c;
      });
      console.log(oppTotal);
      this.board[this.turn][6] > oppTotal ? console.log(this.board[this.turn]) : console.log(opp);
    } else { console.log("no winner")}
  },

  moveIsValid: function() {}

};
