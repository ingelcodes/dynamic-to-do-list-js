// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // All your JavaScript code will go here
    console.log('DOM fully loaded and parsed');

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define addTask function
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add onclick event to remove button
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li, then li to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';


    }

    // Add event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });



});
