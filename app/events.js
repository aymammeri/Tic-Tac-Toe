const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(res => ui.onSignUpSuccess(res))
    .catch(err => ui.onSignUpFailure(err))
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(res => ui.onSignInSuccess(res))
    .catch(err => ui.onSignInFailure(err))
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(res => ui.onSignOutSuccess(res))
    .catch(err => ui.onSignOutFailure(err))
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(res => ui.onCreateGameSuccess(res))
    .catch(err => ui.onCreateGameFailure(err))
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.updateGame()
    .then()
    .catch()
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onUpdateGame
}
