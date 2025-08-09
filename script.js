// 1. Setup Event Listener for Page Load:
document.addEventListener('DOMContentLoaded', function () {
    // All your JavaScript code will go here
    // check if DOM loaded
    console.log('DOM fully loaded and parsed');

    // 2. Select DOM Elements:
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Load tasks when page loads
    loadTasks();

    // Define addTask function
    // 3. Create the addTask Function
    // 4. Task Creation and Removal:
    function addTask(taskText, save = true) {
        // If taskText is an event object or undefined, get from input
        if (taskText === undefined || typeof taskText === 'object') {
            taskText = taskInput.value.trim();
        }

        // Check if the input is empty
        if (taskText === "") {

            alert("Please enter a task!");
            return;
        }

        // added new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // added remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add click event to remove button
        removeButton.onclick = function () {
            // Remove from DOM
            taskList.removeChild(li);

            // Update Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        // Append remove button to li, then li to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save to Local Storage if save parameter is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the input field (only if called from user input, not when loading from storage)
        if (save) {
            taskInput.value = '';
        }
    }

    // Add event listener to the add button
    addButton.addEventListener('click', addTask);

    // Added event listener to the input field for Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });



});
