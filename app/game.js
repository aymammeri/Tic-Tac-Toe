const store = require('./store.js')
const api = require('./api.js')

const wins = store.wins
let state

const start = function (event) {
  event.preventDefault()
  state = new store.Store()
  api.createGame()
    .then(res => {
      state.game = res.game
      // Reset state to initial state
      // Clear the Board
      $('.cell').text('')
      // Turn on clicks
      $('.cell').on('click', play)
      // Announce first move
      $('#announcer').text('X starts')
    })
}

const play = (e) => {
  // Get the box number clicked
  const boxNum = Number(e.target.id)
  // Check box if empty otherwise do nothing
  if (!state.board.includes(boxNum)) castSign()
  // Cast Sign and update state
  function castSign () {
    state.board.push(boxNum)
    state.player.boxes.push(boxNum)
    $(e.target).text(state.player.sign)
    checkResult()
  }
  // Check result
  function checkResult () {
    // Check for win
    for (const win of wins) {
      if (win.every((num) => state.player.boxes.includes(num))) {
        // Turn off clicks
        $('.cell').off('click', play)
        // Announce the Win!
        $('#announcer').text(`Player ${state.player.sign} Wins!`)
        return api.updateGame(boxNum, state.player.sign, true, state.game._id)
      }
    }
    // Check for a tie
    if (state.board.length > 8) {
      // Turn off clicks
      $('.cell').off('click', play)
      // Announce the Tie!
      $('#announcer').text('Tie !')
      return api.updateGame(boxNum, state.player.sign, true, state.game._id)
    }
    toggleTurn()
  }
  // Toggle turn
  function toggleTurn () {
    api.updateGame(boxNum, state.player.sign, false, state.game._id)
    state.player === state.x ? state.player = state.o : state.player = state.x
    // Announce corresponding player turn
    $('#announcer').text(`${state.player.sign}'s Move`)
  }
}

module.exports = {
  play,
  start
}
