// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const api = require('./api.js')
const game = require('./game.js')
const events = require('./events.js')

$(() => {
  $('#go-to-sign-in').on('click', events.goToSignIn)
  $('#go-to-sign-up').on('click', events.goToSignUp)
  $('.cell').on('click', game.play)
  $('#restart').on('click', game.restart)
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)
  $('#signOut').on('click', events.onSignOut)
  $('#start').on('click', events.onCreateGame)
})
