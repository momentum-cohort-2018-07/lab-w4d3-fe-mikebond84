import './text.css'
import request from 'superagent'

request.get('https://notes-api.glitch.me/api/notes')
  .auth('michael', 'password')
  .then(response => {
    let displayResults = response.body
    console.log (response)
  })

forEach .addEventListener('click', event => {
  show('text')
})

function getId (id) {
  return document.getElementById(id)
}

function show (id) {
  return document.getElementById(id)
}
