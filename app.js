// Seleção de DOM

const todoInput = document.querySelector('.todo-input');
//console.log(todoInput)
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// Eventos de Escuta
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteAndCheck);

// Funções
function addTodo(event) {
  event.preventDefault(); // função para prevenir o comportamento padrão do evento
  // console.log('clicou')

  const todoDiv = document.createElement('div'); // cria um elemento div na DOM
  todoDiv.classList.add('todo'); // cria uma classe todo dentro da div na DOM

  const todoLi = document.createElement('li'); // cria um elemento li na DOM
  todoLi.classList.add('todo-list'); // cria uma classe todo dentro da li na DOM
  todoLi.innerText = todoInput.value;
  todoInput.value = ''; // remove o text do input apos salvar no storage

  todoDiv.appendChild(todoLi); // Adiciona a classe todoLi a div todoDiv na DOM

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}

// Function deleteAndCheck

function deleteAndCheck(e) {
  console.log(e.target);

  const item = e.target;

  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement; // Remove todo o elemento da todo clicando no trashIcon
    todo.remove();
  }

  if (item.classList[0] === 'completed-btn') {
    const todo = item.parentElement;    
    todo.classList.toggle('completed');
  }
}
