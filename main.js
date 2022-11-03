window.onload = function() {
    const todoItem = document.getElementById("todo_item");
    const todoCont = document.getElementById("content");
    const orderedList = document.createElement("ul");
    
    // check if logo storage is empty
    
    if (localStorage.getItem('to-do') != ""){
        let myList= localStorage.getItem('to-do').split(',')
        printList ( myList , orderedList)
    }

    todoCont.appendChild(orderedList);
    var todoList = []
    todoItem.onchange = function(e){
        todoList.push(e.target.value);
        todoItem.value = "";
        localStorage.setItem('to-do', todoList);
        let myList= localStorage.getItem('to-do').split(',')
        printList ( myList , orderedList)
        // console.log( typeof(localStorage.getItem('to-do') ))
    }
    // todoItem.onchange = function(e){
    //     console.log(e.target.value);
    // }
    // todoItem.oninput = function(e){
    //     console.log(e.target.value);
    // }
    function printList(myList, container){
        while(container.firstChild) {
        container.removeChild(container.firstChild);
        container.innerHTML = "";
        }
        myList.forEach(item =>{

            var listItem = document.createElement("li");
            var doneButton = document.createElement("button");
            doneButton.innerText = "Completed";
            var postponeButton = document.createElement("button");
            postponeButton.innerText = "Postpone";
    
            listItem.innerText = item;
            listItem.appendChild(doneButton);
            listItem.appendChild(postponeButton);
            
            listItem.classList.add("todo_task");
    
            orderedList.appendChild(listItem);
        })
    }
}

