const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../lib/get-form-fields.js')

const goToSignIn = function () {
  $('#sign-up-section').attr('hidden', true)
  $('#sign-in-section').attr('hidden', false)
}

const goToSignUp = function () {
  $('#sign-in-section').attr('hidden', true)
  $('#sign-up-section').attr('hidden', false)
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// const onUpdateGame = function (event) {
//   event.preventDefault()
//   api.updateGame()
//     .then()
//     .catch()
// }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,

  goToSignIn,
  goToSignUp
}
