const itemInput = document.querySelector('#item-input')
const addBtn = document.querySelector('#add-to-list-btn')
const toDoList = document.querySelector('#to-do-list')
const element = document.createElement('p')


addBtn.addEventListener('click', getLocalStorage)

function getLocalStorage(){
    let a = (localStorage.getItem('list'))
    ? JSON.parse(localStorage.getItem('list'))
    : []

    a.push(itemInput.value)

    localStorage.setItem('list', JSON.stringify(a))

    console.log(a)
    itemInput.value = ''

    
}

function clearArray(){
    localStorage.clear('list')
}



// let a = localStorage.getItem('list')
// ? JSON.parse(localStorage.getItem('list'))
// : []