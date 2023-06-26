// Add Task Function

function addTask() {

    // title
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {

        // Template Clone
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);
 
        //Add Title
        newTask.querySelector(".task-title").textContent = taskTitle;

        //Remove Titles
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //Add Tasks
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // Remove Tasks Event
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        //Add Complete Event
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        // clean Text
        document.querySelector("#task-title").value = "";
    }
}

//Remove Task
function removeTask (task) {
    task.parentNode.remove(true);
}

//Complete Task
function completeTask(task) {
  
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");

}


// Task add 

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {
 
    e.preventDefault();

    addTask();

}) 
