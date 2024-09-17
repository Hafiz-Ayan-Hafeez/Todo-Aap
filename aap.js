var todo = document.querySelector ("#todo");
var list = document.querySelector ("#list");

function printScreen(){
    for (var i = 0; i < globalArray.length; i++){
        list.innerHTML += `<li> ${globalArray[i]} <button class="delete" onclick="todoDelete(${i})">Delete</button> <button class="edit" onclick="todoEdit(${i})">Edit</button> </li>`
    }
}

var globalArray = [];

function addTodo(){
    list.innerHTML = "";
    globalArray.push(todo.value);
    console.log(globalArray);

    printScreen();
    todo.value = "";
}

function todoDelete(i){
    list.innerHTML = "";
    console.log(`${globalArray[i]} Deleted`);
    globalArray.splice(i , 1);
    console.log(globalArray);
    printScreen();
}

function todoEdit(i){ 
    list.innerHTML = "";
    console.log(`${globalArray[i]} Edited`);
    var edittedTodo = prompt ("Enter Value that you want to Edit:-");
    globalArray.splice(i , 1 , edittedTodo);
    printScreen();
}