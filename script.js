let addTodoInput = document.getElementById("add-todo-input")
let addTodoButton = document.getElementById("add-todo-button")
let todoList = document.getElementById("todo-list")
let checkboxNumber = 0

document.addEventListener('keypress', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) {
      addTodo()
    }
  });
addTodoButton.onclick = ()=>{
    addTodo()
}
function addTodo() {
    if (addTodoInput.value != "") {
        todoList.innerHTML += 
        `<li>
        <input type="checkbox" name="" id="checkbox${checkboxNumber}">
        <label for="checkbox${checkboxNumber}">${addTodoInput.value}</label>
        <img src="trash-bin.png" alt="remove" onclick="removeTodo(this)">
        </li>`

        addTodoInput.value = ""
        addTodoInput.placeholder = "Add to-do"

        checkboxNumber += 1
    }else{
        addTodoInput.placeholder = "Type something first"
    }
}
function removeTodo(elem) {
    elem.parentNode.remove()
    checkboxNumber = 0
}
function removeAll() {
    todoList.innerHTML = ""
}
