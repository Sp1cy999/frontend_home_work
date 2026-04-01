
//Добавление задачи
//1 - находим кнопку добавления
const  addBtn = document.querySelector('button')

//2 - Функция добавления задачи
const addTask = () =>{
    const createHomeDiv = document.createElement("div"); //создаем родительский див, куда все будет складываться
    createHomeDiv.className = 'task'; //присваем ему класс "task, чтобы в дальнейшем он работал правильно"

    const createTask = document.createElement("div"); //создаем див, в котором храниться текст задачи
    createTask.className = 'taskText'; //аналогично присваиваем класс
    const findText = document.querySelector('input').value; //вытаскиваем из инпута значение, которое мы написали
    createTask.textContent = findText //добавляем значение, которое мы получили выше в div

    const createEdit = document.createElement("div"); //создаем класс с кнопкой редактирования
    createEdit.className = 'editBtn'; // присваиваем ему соответствующий класс
    const createEditBtn = document.createElement("i")
    createEditBtn.className = 'fas fa-edit';
    createEdit.insertAdjacentElement("beforeend", createEditBtn); 

    //аналогично с кнопкой удаления
    const createDelete = document.createElement("div"); //создаем класс с кнопкой удаления
    createDelete.className = 'deleteBtn'; // присваиваем ему соответствующий класс
    const createDeleteBtn = document.createElement("i")
    createDeleteBtn.className = 'fas fa-trash-alt';
    createDelete.insertAdjacentElement("beforeend", createDeleteBtn); 

    //добавляем все элементы в главный div
    createHomeDiv.insertAdjacentElement("beforeend", createTask);
    createHomeDiv.insertAdjacentElement("beforeend", createEdit);
    createHomeDiv.insertAdjacentElement("beforeend", createDelete);

    const findCard = document.getElementsByClassName('allTasks')[0];
    findCard.insertAdjacentElement("beforeend", createHomeDiv);
    findText.value = '';
}
//3 - вешаем обработчик
addBtn.addEventListener("click", addTask);


//Удаление задачи


/*Вопросы:
1) строка 30-32, можно ли их как-то объединить?
2) Как повесить обработчик только на одну иконку удаления и редактирования?
3) Как обнулить значение инпута?
 */