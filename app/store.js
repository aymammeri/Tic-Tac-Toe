const Store = function () {
  this.board = []

  this.x = {
    boxes: [],
    sign: 'X'
  }

  this.o = {
    boxes: [],
    sign: 'O'
  }

  this.player = this.x
}

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

module.exports = {
  Store,
  wins
}
