"use strict";

const submit = document.querySelector("#submit");
const toDoNameInput = document.querySelector("#todo_name_input");
const toDoQuantityInput = document.querySelector("#todo_quantity_input");
const todoContainer = document.querySelector("#todo_container");
const doneContainer = document.querySelector("#done_container");

// Array til at gemme alle opgaver
const toDoArr = [];

submit.addEventListener("click", subMittTodo);

function subMittTodo() {
  console.log(subMittTodo);
  // Opret et nyt todo-objekt med unikt id og evt. kvantitet
  const todoObj = {
    name: toDoNameInput.value,
    id: self.crypto.randomUUID(),
    quantity: Number(toDoQuantityInput.value),
    done: false,
  };
  toDoArr.push(todoObj);
  console.log("toDoArr", toDoArr);

  // Opret li og checkbox
  const li = document.createElement("li");
  li.dataset.id = todoObj.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const h2 = document.createElement("h2");
  h2.textContent = `${todoObj.name}, antal: ${todoObj.quantity}`;
  h2.contentEditable = true;

  li.appendChild(checkbox);
  li.appendChild(h2);
  //li.innerHTML = `<input type="checkBox" /><h2> ${todoObj.name}, antal: ${todoObj.quantity}</h2>`;
  todoContainer.appendChild(li);

  checkbox.addEventListener("change", () => {
    // console.log("PARENT ELM", li.parentElement.id);
    const correspondingDataObj = toDoArr.find((toDo) => toDo.id === li.dataset.id);
    if (checkbox.checked) {
      todoContainer.removeChild(li);
      correspondingDataObj.done = true;
      // Tilføj slet-knap når den flyttes til done
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Forhindrer at li bliver flyttet tilbage
        doneContainer.removeChild(li);
      });
      li.appendChild(deleteBtn);
      doneContainer.appendChild(li);
    } else {
      doneContainer.removeChild(li);
      correspondingDataObj.done = false;
      // Fjern slet-knap når den flyttes tilbage
      if (li.lastChild.tagName === "BUTTON") {
        li.removeChild(li.lastChild);
      }
      todoContainer.appendChild(li);
    }
  });

  toDoNameInput.value = ""; // Hendan linjan ger soleiðis at input tekstfeltið verður ruddað tá brúkarin hevur trýst á 'submit' knappin
  toDoQuantityInput.value = 1; // Hetta ger so at quantity verður resetta til 1
}
