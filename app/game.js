const vars = require('./vars.js')
const api = require('./api.js')

const wins = vars.wins
const State = vars.State
let state = new State()

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
    state.board.length >= 3 ? checkResult() : toggleTurn()
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
        return api.updateGame(boxNum, state.player.sign, true).then(res => console.log(res))
      }
    }
    // Check for a tie
    if (state.board.length > 8) {
      // Turn off clicks
      $('.cell').off('click', play)
      // Announce the Tie!
      $('#announcer').text('Tie !')
      return api.updateGame(boxNum, state.player.sign, true)
    }
    toggleTurn()
  }
  // Toggle turn
  function toggleTurn () {
    // Announce corresponding player turn
    $('#announcer').text(`${state.player.sign}'s Move`)
    api.updateGame(boxNum, state.player.sign, false)
    state.player === state.x ? state.player = state.o : state.player = state.x
  }
}

const restart = () => {
  // Reset state to initial state
  state = new State()
  // Clear the Board
  $('.cell').text('')
  // Turn on clicks
  $('.cell').on('click', play)
  // Announce first move
  $('#announcer').text('X starts')
}

module.exports = {
  play,
  restart
}
