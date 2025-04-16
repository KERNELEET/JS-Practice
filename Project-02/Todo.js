let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            <span class="task-text">${inputs.value}</span> 
            <i class="fa-solid fa-trash" style="cursor: pointer; margin-left: 10px;"></i>
        `;
        text.appendChild(newEle);
        let taskText = newEle.querySelector(".task-text");
        taskText.addEventListener('click', function () {
            if (taskText.style.textDecoration === 'line-through') {
                taskText.style.textDecoration = 'none';
            } else {
                taskText.style.textDecoration = 'line-through';
            }
        });
        taskText.addEventListener('dblclick', function () {
            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = taskText.textContent;
            taskText.replaceWith(editInput);
            editInput.addEventListener("blur", function () {
                taskText.textContent = editInput.value;
                editInput.replaceWith(taskText);
            });
        });
        newEle.querySelector("i").addEventListener("click", function () {
            newEle.remove();
        });

        inputs.value = "";
    }
}
