document.addEventListener("DOMContentLoaded", () => {
  
  submitBtn = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)")

  submitBtn.addEventListener("click", function(e) {
    console.log("Blocking submit");
    e.preventDefault();
    task = document.querySelector("#new-task-description").value;
    document.querySelector("#tasks").innerHTML = task;
  })
  
});
