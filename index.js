/*

Задача: створення простенької TODO

+ Базовий рівень.

1. Зробити інпут для вводу тексту
2. Зробити кнопку, яка по натисненю, текст з інпута перетворює на елемент списку

<form>
    <input type="text" />
    <button>Click to add</button>
</form>

<ul>
    <li>Зробити щось одне</li>
    <li>Зробити щось інше</li>
</ul>


Просунутий рівень.

Задача: до кожного li приєднати кнопку, за допомогою якої елемент зі списку можна видалити

*/

const form = document.querySelector('#todo-form');

// function getTaskCount() { // need review
//     let taskCount = 0;
//     return function() {
//         return {
//             increment: function () {
//                 taskCount++;
//             },
//             readTaskCount: function() {
//                 return taskCount;
//             }
//         } 
//     }
// }

// const taskCounter = getTaskCount();

let taskCount = 0;

form.addEventListener('submit', addItem);

function addItem(event) {
    event.preventDefault();

    // Перевірка, чи не забагато завдань на сьогодні
    if(taskCount === 10) {
        alert('Ми досягли максимальної кількості завдань');
        return;
    }
    
    const {target} = event;
    const [todoInput] = target;
    
    // Валідація інпута
    const value = todoInput.value.trim();
    if(value === '') {
        alert('Текст завдання не може бути порожньою стркою');
        return;
    }
    // Створення елементу списку
    const list = document.querySelector('#todo-list');
    const li = document.createElement('li');
    li.textContent = value;
    list.append(li);

    // Створюємо кнопку для видалення
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'remove task';
    deleteBtn.classList.add('remove-btn');
    deleteBtn.addEventListener('click', deleteHandler);
    li.append(deleteBtn);

    // Інкрементуємо лічильник завдань
    taskCount++;

    // Чистимо форму після відправки
    target.reset();
}

function deleteHandler({target: {parentNode}}) {
    parentNode.remove();
    taskCount--;
}