const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#signUp').trigger('reset')
  $('.message').text('User signed up successfully')
}

const onSignUpFailure = function () {
  $('.message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('.card-form').trigger('reset')
  $('.message').text('User signed in successfully')
  $('#announcer').text('Start New Game')
  $('#sign-in-section').attr('hidden', true)
  $('.game-container').attr('hidden', false)
  $('#signIn').trigger('reset')
  store.user = response.user
}

const onSignInFailure = function () {
  $('.message').text('Failed to sign in')
}

const onSignOutSuccess = function () {
  $('#sign-in-section').attr('hidden', false)
  $('.game-container').attr('hidden', true)
  $('.cell').off('click')
  $('.cell').text('')
  $('.message').text('User signed out successfully')
}

const onSignOutFailure = function () {
  $('.message').text('Failed to sign out')
}

const onCreateGameSuccess = function (response) {
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
