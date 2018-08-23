window.setTimeout(function() {
  // put all of your JS code from the lecture here
}, 500);

var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

if (input === "list") {
    console.log(todos);
} else if(input === "new") {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to the todos array
    todos.push(newTodo);
}

while(input !== "quit") {
        //handle input
    if (input === "list") {
        console.log(todos);
    } else if(input === "new") {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to the todos array
        todos.push(newTodo);
        console.log(todos);
    }
    //ask again for new input
    var newTodo = prompt("Enter new todo");
}
console.log("OK, YOU QUIT THE APP");



// alert("Hello");