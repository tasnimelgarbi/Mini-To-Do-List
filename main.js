let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
function addtask() {
    let list_value = taskInput.value.trim();

    if (list_value !== "") {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id="check"
        checkbox.style.marginRight = "10px";
        
        let textNode = document.createTextNode(list_value);
        
        let deleteBtn = document.createElement("i");
        deleteBtn.className = "fa-solid fa-trash delete-icon";
        deleteBtn.id = "delete";
        li.appendChild(checkbox);  
        li.appendChild(textNode);
        li.appendChild(deleteBtn);  
        taskList.appendChild(li);
        
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
                li.style.color = "red";
            } else {
                li.style.textDecoration = "none";
                li.style.color = "";
            }
        });
        
        deleteBtn.addEventListener("click", function () {
                taskList.removeChild(li);
            });
  
        clear.style.display = "inline-block";
        taskInput.value = "";
        
    }
}


addBtn.addEventListener("click",addtask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addtask(); }

});
window.addEventListener("load", function () {
    taskInput.focus();
});
let clear = document.createElement("button");
clear.type = "button";
clear.textContent = "Clear Tasks";
clear.id = "clear-btn";
clear.style.display = "none"; 
document.body.appendChild(clear);

clear.addEventListener("click", function () {
    taskList.innerHTML = "";
    clear.style.display = "none"; 
});
