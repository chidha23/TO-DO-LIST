document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('task-list').appendChild(li);
        taskInput.value = ''; // Clear the input
    }
});


// finds the element by id = add task ; this could be buttton  
// addeventlistner=it listen or awaits for something to happen that is event after it runs the code inside {}
//finds the input box with the id=taskinput and stores the variable 
//gets the text entered in the box and trim down the extra spaces
//if = checks whether the box has any txt or empty
// create an element li to hold the task
// sets the txt inside as new list 


//li.append  : appends the delete button to the list 
// do: add complete txt and delete button to the list