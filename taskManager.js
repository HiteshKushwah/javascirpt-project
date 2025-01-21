// Task Data
const tasks = new Map();  // Store tasks in a Map for easier manipulation

// Add Task Function
function addTask(name, priority, deadline, description) {
  const taskId = Date.now();
  const newTask = { id: taskId, name, priority, deadline, description, completed: false };
  tasks.set(taskId, newTask);
  renderTasks();
}

// Render Tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';  // Clear the list before rendering

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item');
    taskItem.innerHTML = `
      <h5>${task.name} - ${task.priority}</h5>
      <p>${task.description}</p>
      <p><strong>Deadline:</strong> ${task.deadline}</p>
      <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">Delete</button>
      <button class="btn btn-sm btn-success" onclick="toggleComplete(${task.id})">Mark as ${task.completed ? 'Incomplete' : 'Completed'}</button>
    `;
    taskList.appendChild(taskItem);
  });
}

// Delete Task
function deleteTask(taskId) {
  tasks.delete(taskId);
  renderTasks();
}

// Toggle Task Completion
function toggleComplete(taskId) {
  const task = tasks.get(taskId);
  task.completed = !task.completed;
  renderTasks();
}

// Handle Form Submission
document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const taskName = document.getElementById('taskName').value;
  const taskPriority = document.getElementById('taskPriority').value;
  const taskDeadline = document.getElementById('taskDeadline').value;
  const taskDescription = document.getElementById('taskDescription').value;
  
  addTask(taskName, taskPriority, taskDeadline, taskDescription);
  this.reset();  // Reset form
});

renderTasks();  // Initialize with empty tasks
