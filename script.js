const h1 = document.querySelector("h1")

const initialDate = new Date("2024-07-01")

if (!localStorage.doneCounter) localStorage.setItem("doneCounter", 0)
let doneCounter = parseInt(localStorage.doneCounter)
let days = Math.floor((new Date() - initialDate) / 86400000)

document.onclick = () => {
 doneCounter += 2
 localStorage.doneCounter = doneCounter
 h1.innerHTML = days - doneCounter
}

h1.innerHTML = days - doneCounter

localStorage.removeItem("doneCounter")
