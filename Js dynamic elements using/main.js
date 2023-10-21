const m = document.querySelector("#kapsayici")
const add_button = document.querySelector("#addButton")
const done = document.querySelector("#kapsayici2")

add_button.addEventListener("click", add_task)

function add_task(){
    const newElement = document.createElement("div")
    let task = prompt("Task: ")

    newElement.className = "gorevler"
    newElement.textContent = task
    newElement.addEventListener("click",remove_task)
    m.appendChild(newElement)
}

function remove_task(){
    const newDone = document.createElement("div")
    newDone.className = "bitenler"
    newDone.textContent = this.textContent
    newDone.addEventListener("click",backToTask)
    done.appendChild(newDone)
    this.remove()
}

function backToTask(){
    const notDone = document.createElement("div")
    notDone.className = "gorevler"
    notDone.textContent = this.textContent
    notDone.addEventListener("click",remove_task)
    m.appendChild(notDone)
    this.remove()
}














