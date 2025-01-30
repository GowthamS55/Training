let tasks = [];
function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const estimatedTime = document.getElementById('estimatedTime').value;

    if (title === '' || description === '' || estimatedTime === '') {
        alert('Please fill in all fields.');
        return;
    }

    const task = {
        title: title,
        description: description,
        estimatedTime: estimatedTime,
        status: 'pending'
    };

    tasks.push(task);
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('estimatedTime').value = '';
    
    displayTasks();
}
function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const filterStatus = document.getElementById('filterStatus').value;

  tasks.forEach((task, index) => {
      if (filterStatus === 'all' || task.status === filterStatus) {
          const taskDiv = document.createElement('div');
          taskDiv.className = 'card mb-3';
          taskDiv.innerHTML = `
              <div class="card-body">
                  <h5 class="card-title">${task.title}</h5>
                  <p class="card-text">${task.description}</p>
                  <p class="card-text"><small class="text-muted">Estimated Time: ${new Date(task.estimatedTime).toLocaleString()}</small></p>
                  <p class="card-text"><strong>Status:</strong> ${task.status}</p>
                  <button class="btn btn-success btn-sm me-2" onclick="changeStatus(${index})">Toggle Status</button>
                  <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
              </div>
          `;
          taskList.appendChild(taskDiv);
      }
  });
}


function changeStatus(index) {
    const task = tasks[index];
    task.status = task.status === 'completed' ? 'pending' : 'completed';
    displayTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
function filterTasks() {
    displayTasks();
} 

