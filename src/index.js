import "./styles/main.css"
import cardList from "./components/cardList/index"
import data from "./data/todos.json"

const main = document.getElementById("main");
const cardListElement = cardList(data.todos);

main.appendChild(cardListElement);
