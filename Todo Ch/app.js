const todos = document.getElementById('todos');
const Input = document.getElementById('input');
const TodoCount = document.getElementsByClassName('count');
const bottomMenu = document.querySelector('.bottom-menu');
const todoText = document.getElementsByClassName('todo-text');
let dragging;

const createTodo = () =>  {
    
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'my-todo-list')
    let li = document.createElement('li');
    li.setAttribute('class', 'todo-text');
    li.draggable = "true";

    let p = document.createElement('p');
    p.innerText = Input.value;

    li.appendChild(p);

    let crossBtn = document.createElement('img');
    crossBtn.setAttribute('src', 'assets/delete.svg');
    crossBtn.setAttribute('class', 'menu-width cross')

    li.appendChild(crossBtn);

    ul.appendChild(li);
    Input.value = '';

    todos.appendChild(li);

    //crossing list when clicked
    li.addEventListener('click', (e) => {
        e.stopPropagation();
        li.classList.toggle('grey-text');
    })

    //removing an item from the list
    crossBtn.addEventListener('click', () => {
        todos.removeChild(li)
    });

    TodoCount.innerText = todoText.length;

    //removing the bottom mneu once list is empty
    if(todoText.length = null){
        bottomMenu.style.display = 'none';
    }
    // drag and drop functionality
    Sorting();
}


const Sorting = () => {
    todos.addEventListener('dragstart', (event) => {
        dragging = event.target;
        // event.preventDefault();
        // console.log(event.target);
    })
    todos.addEventListener('drop', (event) => {
        let beforeTarget = event.target;

        //checking if parent element is a span
        if(event.target.matches('span'))
        return;

        if(event.target.matches('img'))
        return;
        //draggiing element
        if(event.target.matches('p'))
        beforeTarget = event.target.parentNode;

        //visualize drag and drop
        todos.insertBefore(dragging, beforeTarget)
    })
    todos.addEventListener('dragover', (event) => {
        event.preventDefault();
        //console.log(event.target);
    })
}

Input.addEventListener('keypress', (e) => {
    if(Input.value !== '')
    if(e.key === "Enter"){
        createTodo();
        bottomMenu.style.display = 'block'
    }
})
