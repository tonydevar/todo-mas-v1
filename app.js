// To-Do List Application Logic

// State
let tasks = [];
let currentFilter = 'all';

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  renderTasks();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  addBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setFilter(btn.dataset.filter);
    });
  });
}

// Load tasks from localStorage
function loadTasks() {
  const stored = localStorage.getItem('tasks');
  if (stored) {
    try {
      tasks = JSON.parse(stored);
    } catch (e) {
      tasks = [];
    }
  }
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a new task
function addTask() {
  const text = taskInput.value.trim();
  
  if (!text) return;

  const task = {
    id: Date.now().toString(),
    text: text,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderTasks();
  taskInput.value = '';
  taskInput.focus();
}

// Toggle task completion
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  }
}

// Delete a task
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

// Set filter
function setFilter(filter) {
  currentFilter = filter;
  
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  
  renderTasks();
}

// Get filtered tasks
function getFilteredTasks() {
  switch (currentFilter) {
    case 'active':
      return tasks.filter(t => !t.completed);
    case 'completed':
      return tasks.filter(t => t.completed);
    default:
      return tasks;
  }
}

// Render tasks
function renderTasks() {
  const filtered = getFilteredTasks();
  
  if (filtered.length === 0) {
    taskList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📝</div>
        <p>${getEmptyMessage()}</p>
      </div>
    `;
    return;
  }

  taskList.innerHTML = filtered.map(task => `
    <div class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
      <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="toggleTask('${task.id}')"></div>
      <span class="task-text">${escapeHtml(task.text)}</span>
      <button class="btn-delete" onclick="deleteTask('${task.id}')" aria-label="Delete task">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  `).join('');
}

// Get empty state message
function getEmptyMessage() {
  if (tasks.length === 0) {
    return 'No tasks yet. Add one above!';
  }
  switch (currentFilter) {
    case 'active':
      return 'No active tasks. Great job!';
    case 'completed':
      return 'No completed tasks yet.';
    default:
      return 'No tasks found.';
  }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
