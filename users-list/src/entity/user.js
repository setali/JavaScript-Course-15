import { COLUMNS } from '../tools/constants'

export default class User {
  constructor ({ id, name, username, address }) {
    this.id = id
    this.name = name
    this.username = username
    this._address = address
    // this.remove = this.remove.bind(this)
  }

  get address () {
    return `${this._address.city} ${this._address.street}`
  }

  remove = () => this.row.remove()
  //   remove = () => document.getElementById(`tr-${this.id}`).remove()

  //   remove (event) {
  //     // event.target.parentElement.remove()
  //     document.getElementById(`tr-${this.id}`).remove()
  //   }

  generateDeleteAction () {
    const deleteAction = document.createElement('td')
    deleteAction.textContent = 'x'
    deleteAction.style.color = 'red'
    deleteAction.style.padding = '5px'
    deleteAction.style.cursor = 'pointer'
    // deleteAction.addEventListener('click', this.remove)
    // deleteAction.addEventListener('click', this.remove.bind(this))
    // deleteAction.addEventListener('click', () => this.remove())
    deleteAction.addEventListener('click', this.remove)

    return deleteAction
  }

  render () {
    const tr = document.createElement('tr')
    tr.setAttribute('id', `tr-${this.id}`)
    this.row = tr

    COLUMNS.forEach(column => {
      const td = document.createElement('td')
      td.textContent = this[column]

      tr.appendChild(td)
    })

    tr.appendChild(this.generateDeleteAction())

    return tr
  }
}
