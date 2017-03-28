if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const input = document.querySelector('input')
const list = document.querySelector('ul.listofthings')
const button = document.querySelector('button')
const form = document.querySelector('form')

button.addEventListener('click', (event) => {
  event.preventDefault()
  let listItem = input.value
  const li = document.createElement('li')
  li.textContent = listItem
  list.appendChild(li)
  let dubClick = false
  li.addEventListener('click', () => {
    setTimeout(() => {
      if (!dubClick) {
        li.style.textDecoration = 'line-through'
      }
    }, 300)
  })
  li.addEventListener('dblclick', (event) => {
    dubClick = true
    list.removeChild(li)
  })
  form.reset()
})

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
