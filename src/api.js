import { requestSync, requestAsync } from './network'

function login () {
  return requestSync('/posts')
}

function loginAsync () {
  return requestAsync('/posts')
}

export default {
  login,
  loginAsync
}
