const ELEMENT = document.querySelector("h1")

const INITIAL_DATE = new Date("2024-07-01")
const MILISECONDS_TO_DAYS_DEVIDER = 86400000

if (!localStorage.doneCounter) localStorage.setItem("doneCounter", 0)
let doneCounter = parseInt(localStorage.doneCounter)
let days = Math.floor((new Date() - initialDate) / MILISECONDS_TO_DAYS_DEVIDER)

document.onclick = () => {
 doneCounter += 2
 localStorage.doneCounter = doneCounter
 ELEMENT.innerHTML = days - doneCounter
}

ELEMENT.innerHTML = days - doneCounter
