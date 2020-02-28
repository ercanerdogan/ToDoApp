//UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addNewItem);
    taskList.addEventListener('click', deleteItem);
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function addNewItem(e) {
    if (input.value == '') {
        alert('add new item');
    }

    //create li element
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    console.log(li);

    //create a element
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';


    //add a to li
    li.appendChild(a);

    taskList.appendChild(li);

    input.value = '';

    e.preventDefault();


}

function deleteItem(e) {
    if (confirm('Are you sure want to delete item ?')) {
        if (e.target.className === 'fas fa-times') {
            e.target.parentElement.parentElement.remove();
        }

    }

    e.preventDefault();
}

function deleteAllItems(e) {

    if (confirm('Are you sure want to delete all items ?')) {
        taskList.childNodes.forEach(function (item) {

            if (item.nodeType === 1) {
                 console.log(item);
                item.remove();
            }

        });
    }

    e.preventDefault();
}