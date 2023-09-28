const itemInput = document.querySelector('#item-input')
const addBtn = document.querySelector('#add-to-list-btn')
const clearBtn = document.querySelector('#clear-list')
const toDoList = document.querySelector('#to-do-list')



addBtn.addEventListener('click', addToLocalStorage)
clearBtn.addEventListener('click', clearArray)
window.addEventListener('DOMContentLoaded', displayList)

function addToLocalStorage(){
    let a = getLocalStorage()
    let item = itemInput.value

    a.push(item)

    localStorage.setItem('list', JSON.stringify(a))

    itemInput.value = ''

    createListItem(item)
}

function getLocalStorage(){
    return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}

function displayList(){
    let items = getLocalStorage()
    if(items.length > 0){
        items.forEach(function(i){
            createListItem(i)
        })
    }
}

function createListItem(i){
    let element = document.createElement('li')
    element.innerHTML = `${i}`
    toDoList.appendChild(element)
}

function clearArray(){
    localStorage.clear('list')
    toDoList.remove()
}



// let a = localStorage.getItem('list')
// ? JSON.parse(localStorage.getItem('list'))
// : []