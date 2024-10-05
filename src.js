document.getElementById('addTaskButton').addEventListener('click', addTask);

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskValue = taskInput.value.trim();

            if (taskValue) {
                const taskList = document.getElementById('taskList');
                const listItem = document.createElement('li');

                listItem.innerHTML = `
                    ${taskValue}
                    <div>
                        <button class="update" onclick="updateTask(this)">Update</button>
                        <button class="delete" onclick="deleteTask(this)">Delete</button>
                    </div>
                `;

                taskList.appendChild(listItem);
                taskInput.value = ''; // Clear input
            }
        }

        function deleteTask(button) {
            const listItem = button.parentElement.parentElement;
            listItem.remove();
        }

        function updateTask(button) {
            const listItem = button.parentElement.parentElement;
            const currentTask = listItem.firstChild.textContent.trim();
            const newTask = prompt('Update your task:', currentTask);

            if (newTask) {
                listItem.firstChild.textContent = newTask;
            }
        }