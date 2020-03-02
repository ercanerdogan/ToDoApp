//UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector("#task-list");
const items = ['item 1', 'item 2', 'item 3', 'item 4'];

//load items
loadItems();

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addNewItem);
    taskList.addEventListener('click', deleteItem);
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function loadItems() {
    items.forEach(function (item) {
        createItem(item);
    })
}

function createItem(nodeText) {

    //create li element
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(nodeText));

    console.log(li);

    //create a element
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';


    //add a to li
    li.appendChild(a);

    taskList.appendChild(li);

}

function addNewItem(e) {
    if (input.value == '') {
        alert('add new item');
    }

    createItem(input.value);

    input.value = '';

    e.preventDefault();


}

function deleteItem(e) {

    if (e.target.className === 'fas fa-times') 
    {
        if (confirm('Are you sure want to delete item ?')) 
        {
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