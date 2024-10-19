
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearTasksButton = document.getElementById('clearTasksButton');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="deleteButton" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
};

// Function to add a task
const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        renderTasks();
    }
};

// Function to delete a task
const deleteTask = (index) => {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
};


const toggleTaskCompletion = (index) => {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
};
const clearAllTasks = () => {
    tasks = [];
    localStorage.removeItem('tasks');
    renderTasks();
};
addTaskButton.addEventListener('click', addTask);
clearTasksButton.addEventListener('click', clearAllTasks);
taskList.addEventListener('click', (event) => {
    if (event.target.matches('.deleteButton')) {
        const index = event.target.getAttribute('data-index');
        deleteTask(index);
    }
    if (event.target.matches('input[type="checkbox"]')) {
        const index = event.target.getAttribute('data-index');
        toggleTaskCompletion(index);
    }
});

// Initial render
renderTasks();
