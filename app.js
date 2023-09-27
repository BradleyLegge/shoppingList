const itemInput = document.querySelector('#item-input')
const addBtn = document.querySelector('#add-to-list-btn')
const toDoList = document.querySelector('#to-do-list')
const element = document.createElement('p')
let a = ['abc', 'bcd', 'cde']


addBtn.addEventListener('click', getLocalStorage)

function showArray(){
    console.log(a)
}

function addToArray(){
    a.push('def')
    console.log(a)
}

function getLocalStorage(){
    // JSON.parse(localStorage.getItem('list'))
    localStorage.setItem('list', JSON.stringify(a))
    console.log(a)
}