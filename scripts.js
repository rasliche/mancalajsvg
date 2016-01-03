// This is the logic for the Mancala game
var MancalaGame = {
  turn: 'A',

  board: {
    'A' : [4,4,4,4,4,4,0],
    'B' : [4,4,4,4,4,4,0]
  },

  // Takes a house index (0-5, 6 is the store)
  // Moves the gems
  // ToDo: (advanced rules)
  // This function should also check to see if the last house a gem was
  // put in was empty. If it is, the the player whose turn it is gets
  // all the gems in the opponent's house as well as the gem they just
  // dropped. ( house index sums = 5. ie, house 0 = oppHouse 5)
  move: function(house) {
    var originHouse = house;
    var originSide = this.turn;
    var side = this.turn
    for (var gems = this.board[side][house]; gems > 0; gems -=1) {
      console.log("Entered for loop");
      console.log(gems+" "+house);
      house += 1;

      // Switch sides if gems left over after putting one in the store
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
    var oppSide = this.turn === 'A' ? 'B' : 'A';
    var total = 0;
    for (var h = 0; h<6; h++) {
      total+= this.board[this.turn][h];
    }
    if (total === 0) {
      // If 'side' is empty, then we know their store (side[6]) is
      // their total. opp.reduce() to get opp score, then compare
      var oppTotal = this.board[oppSide].reduce(function(acc, c) {
        return acc + c;
      });
      // Returns the key for the winning side
      return this.board[this.turn][6] > oppTotal ? this.turn : oppSide;
    } else { console.log("No winner, yet!")}
  },

  endTurn: function() {
    this.checkForWin(turn);
    turn = (turn === 'A') ? 'B' : 'A';
  },

  // Error checks that a house has gems and is not a store
  moveIsValid: function(house) {
    if (-1 < house && house < 6 && this.board[this.turn][house] > 0){
      return true;
    } else {
      return false;
    }
  }

};
