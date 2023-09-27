const itemInput = document.querySelector('#item-input')
const addBtn = document.querySelector('#add-to-list-btn')
const toDoList = document.querySelector('#to-do-list')
const element = document.createElement('p')
let a = []

//Grab input from user
//Display input from user on screen
//Store input from user in an array
//Store array in local storage
//Add button to strike through task completed by user
//Add button to delete item off list
//Add button to remove all items off list

addBtn.addEventListener('click', getArray)

function displayToDoTask(){
    element.innerHTML = itemInput.value
    toDoList.appendChild(element)
    sendToLocalStorage()
}

function getArray(){
}