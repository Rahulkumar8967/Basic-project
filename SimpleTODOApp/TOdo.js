// Array to store todo items
let todos = [];

// Function to add a new todo
const addTodo = () => {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim();
  

  if (todoText !== '') {
    // Create a new todo object
    const newTodo = {
      id: Date.now(),
      text: todoText
    };

    // Add the new todo to the array
    todos.push(newTodo);

    // Update the todo list on the page
    updateTodoList();

    // Clear the input field
    todoInput.value = '';
  }
};

// Function to update the todo list on the page
const updateTodoList = () => {
  const todoList = document.getElementById('todoList');

  // Clear existing list items
  todoList.innerHTML = '';

  // Add each todo to the list
  todos.forEach(todo => {
    const listItem = document.createElement('li');
    listItem.textContent = todo.text;
    todoList.appendChild(listItem);
  });
};