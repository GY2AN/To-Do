let userInputEl = document.getElementById("userInputElement");
let buttonEl = document.getElementById("buttonElement");
let listContainerEl = document.getElementById("ulListContainer");

function add(){
    let listItems = document.createElement("li");
    listItems.classList.add("todo-list-items", "d-flex", "flex-row");
    listContainerEl.appendChild(listItems);

     let inputCheckBoxEl = document.createElement("input");
     inputCheckBoxEl.type = "checkbox";
     inputCheckBoxEl.id = "checkBox";
     inputCheckBoxEl.classList.add("input-checkbox-class");
     listItems.appendChild(inputCheckBoxEl);
     
     let labelContainerEl = document.createElement("div");
     labelContainerEl.classList.add("d-flex", "flex-row", "justify-content-between", "label-container")
     listItems.appendChild(labelContainerEl);

     let labelCheckboxEl = document.createElement("label");
     labelCheckboxEl.setAttribute("for", "checkBox");
     labelCheckboxEl.textContent = userInputEl.value;
     labelCheckboxEl.classList.add("label-checkbox-class");
     labelContainerEl.appendChild(labelCheckboxEl);

     let deleteContainerEl = document.createElement("div");
     deleteContainerEl.classList.add("icon-delete-container")
     labelContainerEl.appendChild(deleteContainerEl);

     let deleteIconEl = document.createElement("i");
     deleteIconEl.classList.add("far", "fa-trash-alt", "delete-icon");
     deleteContainerEl.appendChild(deleteIconEl);

     inputCheckBoxEl.onclick = function(){
        labelCheckboxEl.classList.toggle("selected");
     }

     deleteIconEl.onclick = function(){
        listContainerEl.removeChild(listItems);
     }

}


