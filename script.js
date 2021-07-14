let addToDoButton = document.querySelector('.add_todo');
let toDoContainer = document.querySelector('.todos');
let inputField = document.querySelector('.input_todo');
let countList = 1;


addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    addItemToList(paragraph, inputField, toDoContainer);
    countList++;
    clearInput(inputField);
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        clearItem(toDoContainer, paragraph);
    })
})

function addItemToList(paragraph, inputField, toDoContainer) {
    paragraph.classList.add('todo_styling');
    paragraph.innerText = countList.toString() + '. ' + inputField.value;
    toDoContainer.appendChild(paragraph);
}

function clearInput(inputField) {
    inputField.value = '';
}

function clearItem(toDoContainer, paragraph) {
    toDoContainer.removeChild(paragraph);
    countList--;
}