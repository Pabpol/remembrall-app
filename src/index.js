import "./styles/main.css"
import card from "./components/cards/index"

const main = document.getElementById("main");

const todoExample = {
    title: "Mi título",
    description: "Mi descripción",
    status: false,
    dueDate: "Mi fecha límite"
};
const cardElement = card(todoExample);

// Añadir el elemento de tarjeta al DOM
main.appendChild(cardElement);
