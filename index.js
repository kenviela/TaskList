const tasksContainer = document.getElementById("tasksContainer");
const taskInput = document.getElementById("NewTask");
let tasks = []; // array para almacenar las tareas

const deleteTask = (index, taskElement) => {
  console.log("button " + index);
  console.log("element " + taskElement);
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "Eliminar";

  deleteButton.addEventListener("click", () => {
    tasks.splice(index, 1);
    renderTasks();
  });
  taskElement.appendChild(deleteButton);
};

const editTask = (index) => {
  //crear boton editar
  const editButton = document.createElement("button");
  editButton.classList.add("editButton");
  editButton.textContent("Editar");

  // crear input para actualizar
  const inputEdit = document.createElement("input");
  inputEdit.type = "text";
  inputEdit.value = tasks[index];
};
const renderTasks = () => {
  tasksContainer.innerHTML = ""; //limpia el contenido actual del contenedor

  //recorre el array
  for (let task = 0; task < tasks.length; task++) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task"); //agrega una clase al elemento creado

    //agregar el valor del array en un elemento div para mostrarlo en el html
    taskElement.textContent = tasks[task];

    //boton borrar
    deleteTask(task, taskElement);

    //agrega la tarea al div principal "tasksContainer"
    tasksContainer.appendChild(taskElement);
  }
};

const addNewTask = (event) => {
  event.preventDefault(); // Evita el envío del formulario
  const newTask = taskInput.value.trim(); // Obtiene el texto ingresado y elimina espacios en blanco

  if (newTask) {
    tasks.push(newTask); // Agrega la tarea al array
    renderTasks(); // Actualiza la lista de tareas
    taskInput.value = ""; // Limpia el campo de entrada
  } else {
    alert("Por favor, ingresa una tarea válida."); // Mensaje si no se escribe nada
  }
};
