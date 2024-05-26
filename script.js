document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');
    const taskList = document.getElementById('taskList');
    const messageList = document.getElementById('messageList');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');

    let selectedUser = null;

    // Example users
    const users = ['Alice', 'Bob', 'Charlie'];

    // Populate user list
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        li.addEventListener('click', () => {
            selectUser(user, li);
        });
        userList.appendChild(li);
    });

    // Select user function
    function selectUser(user, li) {
        selectedUser = user;
        document.querySelectorAll('#userList li').forEach(el => {
            el.classList.remove('selected');
        });
        li.classList.add('selected');
    }

    // Add task functionality
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '' && selectedUser) {
            const li = document.createElement('li');
            li.textContent = `${selectedUser}: ${taskText}`;
            taskList.appendChild(li);
            taskInput.value = '';
        } else {
            alert('Please select a user and enter a task.');
        }
    });

    // Send message functionality
    sendMessageBtn.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText !== '' && selectedUser) {
            const div = document.createElement('div');
            div.textContent = `${selectedUser}: ${messageText}`;
            messageList.appendChild(div);
            messageInput.value = '';
        } else {
            alert('Please select a user and enter a message.');
        }
    });
});
