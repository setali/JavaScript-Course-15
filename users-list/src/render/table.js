import User from '../entity/user'
import renderTableHead from './table-head'
import '../assets/css/table.css'
import '../assets/scss/table.scss'

export default function renderTable (users) {
  const table = document.createElement('table')
  table.setAttribute('border', 1)

  table.appendChild(renderTableHead())

  users.forEach(el => {
    const user = new User(el)
    table.appendChild(user.render())
  })

  return table
}
