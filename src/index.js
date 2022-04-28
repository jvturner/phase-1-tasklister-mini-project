document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM Content is Loaded");

  const form = document.getElementById("create-task-form");
  // console.log("You have grabbed the Right Element")

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log("The Prevent Default Event Listener Is Working :-)!!!!")

    const taskToDo = e.target.querySelector("#new-task-description")
    // console.log(taskToDo)
    console.log(taskToDo.value)
    const updatedtaskToDo = taskToDo.value
    console.log(updatedtaskToDo)

    const grabTasksID = document.getElementById("list")
    console.log(grabTasksID)

    const newItem = document.createElement('li')
    newItem.innerHTML = updatedtaskToDo
    document.getElementById("list").appendChild(newItem)

    






  })
});



// 1) DOMContentLoaded event Listener (Console Log to check the execution)
// The DOM Content Loaded event listenter is working--good job Jamond
// 2) Grab the "id" of the form "create-task-form"
// 3) Assign a variable to it newForm
// 4) Create an addEventListener for the "submit" event
// 5) Prevent the default page refresh action using e.preventDefault() or event.preventDefault()
// 6) Console Log(Default is being prevented to check the execution)










