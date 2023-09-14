import "./styles/main.css"
import cardList from "./components/cardList/index"
import header from "./components/header/index"
import data from "./data/todos.json"
import navigation from "./components/navbar/index"

const main = document.getElementById("main");
const exampleProject = {
    title: "Proyecto de prueba",
    description: "Esta es una descripción de un proyecto"
}
const exampleProject2 = {
    title: "Proyecto de prueba",
    description: "Esta es una descripción de un proyecto"
}
const headerElement = header(exampleProject);
const cardListElement = cardList(data.todos);
const navigationElement = navigation([exampleProject, exampleProject2]);

main.appendChild(navigationElement);
main.appendChild(headerElement);
main.appendChild(cardListElement);
