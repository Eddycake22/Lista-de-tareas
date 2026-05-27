/*const { createElement } = require("react");*/


document.getElementById('addTask').addEventListener('click', () => {

    const nametask = document.getElementById('taskInput').value.trim();
    const category = document.getElementById('categorySelect').value;
    const date = document.getElementById('dueDateInput').value;
    const lista = document.getElementById('taskList');

    flatpickr(dueDateInput, {
        dateFormat: "Y-m-d",
        minDate: "today",   
    });
    

    let agregar = true;

    if (!nametask) {
        setInvalid(nametask);
        agregar = false;
    }

    if (category==="") {
        agregar = false;
    }

    if (agregar) {
    /*lista.insertAdjacentHTML("beforeend", ` <li>${nametask} - ${category} - ${date}</li>`);*/
    const li = document.createElement("li");
    li.classList.add('completed');
    li.textContent = `${nametask} ${category} ${date}`;
    lista.appendChild(li);

    document.getElementById('taskInput').value = "";
    document.getElementById('categorySelect').value = "";
    document.getElementById('dueDateInput').value = "";

    const btn_complete = document.createElement("button");
    btn_complete.classList.add('btn', 'btn-success', 'btn-sm', 'me-2');
    btn_complete.id = 'completado';
    btn_complete.textContent= "completado";
    li.appendChild(btn_complete);

    const btn_del = document.createElement("button");
    btn_del.classList.add('btn', 'btn-danger', 'btn-sm');
    btn_del.textContent= "eliminar";
    btn_del.id='eliminar';
    li.appendChild(btn_del);
    
    }
    
   
});

 /*let tasks = JSON.parse(localStorage.getItem('taks')) || [];

    
     functions
   
    createTaskElement
    addTask
    renderTask
    updateStatistics
     */

/*document.addEventListener ('DOMContentLoaded') 

addTask
searchInput
filterSelect
statistics

JSON.parse(localStorage)*/