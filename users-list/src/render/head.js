import '../assets/scss/main.scss'
import logo from '../assets/images/logo.png'

export default function renderHead () {
  const div = document.createElement('div')
  div.classList.add('head')

  const h2 = document.createElement('h2')
  h2.textContent = 'Users list'

  const image = document.createElement('img')
  image.setAttribute('src', logo)

  div.appendChild(image)
  div.appendChild(h2)

  return div
}
