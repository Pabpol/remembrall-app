import './styles/main.css'
import cardList from './components/cardList/index'
import header from './components/header/index'
import todos from './data/todoProvider'
import projects from './data/projectProvider'
import navigation from './components/navbar/index'

const main = document.getElementById('main')
const headerElement = header(projects())
const cardListElement = cardList(todos())
const navigationElement = navigation(projects())

main.appendChild(navigationElement)
main.appendChild(headerElement)
main.appendChild(cardListElement)
