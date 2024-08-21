const h1 = document.querySelector("h1")

h1.innerHTML = localStorage.doneCounter

localStorage.removeItem("doneCounter")
