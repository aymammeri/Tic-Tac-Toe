const store = require('./store.js')

const onSignUpSuccess = function () {
  $('.message').text('User signed up successfully')
}

const onSignUpFailure = function () {
  $('.message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('.message').text('User signed in successfully')
  store.user = response.user
  store.game = response.game
}

const onSignInFailure = function () {
  $('.message').text('Failed to sign in')
}

const onSignOutSuccess = function () {
  $('.message').text('User signed out successfully')
}

const onSignOutFailure = function () {
  $('.message').text('Failed to sign out')
}

const onCreateGameSuccess = function (response) {
  store.game = response.game
  console.log(store)
  $('.message').text('Game has been Created')
}

const onCreateGameFailure = function () {
  $('.message').text('Failed to create game')
}

const onUpdateGameSuccess = function () {
  $('.message').text('Game has been updated')
}

const onUpdateGameFailure = function () {
  $('.message').text('Failed to update game ')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
