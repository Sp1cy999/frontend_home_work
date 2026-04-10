
//Добавление задачи
//1 - находим кнопку добавления
const  btnForAdd = document.querySelector('button')

const clickOnTask = function (event){
    if (event.target.classList.contains('fa-trash-alt')){
        this.remove();
    }

    if (event.target.classList.contains('fa-edit')){
        const taskText = this.querySelector('.taskText')

        const input = document.createElement('input');
        input.classList.add('newTextInput')
        input.value = taskText.textContent;
        taskText.replaceWith(input);

        input.addEventListener('keypress', (e) => {
            if(e.key === 'Enter'){
                const newText = document.createElement('div');
                newText.classList.add('taskText');
                newText.textContent = input.value;
                input.replaceWith(newText);
            }
        })
    }
}


// Функция проверки input
const isEmpty = () => {
    const taskInputValue = document.getElementById('taskInput').value.trim();
    if (taskInputValue.length <= 0){
        taskInput.classList.add('error');
        setTimeout(() => {
            taskInput.classList.remove('error');
        }, 2000);
    }
    else{
        taskInput.classList.remove('error');
        addTask();
    } 
}

//2 - Функция добавления задачи
const addTask = () =>{
    const inputValue = document.querySelector('input').value; //вытаскиваем из инпута значение, которое мы написали
    

    const homeDiv = document.createElement("div"); //создаем родительский див, куда все будет складываться
    homeDiv.className = 'task'; //присваем ему класс "task, чтобы в дальнейшем он работал правильно"

    const textDiv = document.createElement("div"); //создаем див, в котором храниться текст задачи
    textDiv.className = 'taskText'; //аналогично присваиваем класс
    textDiv.textContent = inputValue //добавляем значение, которое мы получили выше в div

    const btnForEdit = document.createElement("button"); //создаем класс с кнопкой редактирования
    btnForEdit.className = 'editBtn'; // присваиваем ему соответствующий класс
    const btnForEditI = document.createElement("i")
    btnForEditI.className = 'fas fa-edit';
    btnForEdit.insertAdjacentElement("beforeend", btnForEditI); 

    //аналогично с кнопкой удаления
    const btnForDelete = document.createElement("button"); //создаем класс с кнопкой удаления
    btnForDelete.className = 'deleteBtn'; // присваиваем ему соответствующий класс
    const btnForDeleteI = document.createElement("i")
    btnForDeleteI.className = 'fas fa-trash-alt';
    btnForDelete.insertAdjacentElement("beforeend", btnForDeleteI); 

    //добавляем все элементы в главный div
    homeDiv.insertAdjacentElement("beforeend", textDiv);
    homeDiv.insertAdjacentElement("beforeend", btnForEdit);
    homeDiv.insertAdjacentElement("beforeend", btnForDelete);
    homeDiv.addEventListener('click', clickOnTask);

    const allTasks = document.getElementsByClassName('allTasks')[0];
    allTasks.insertAdjacentElement("beforeend", homeDiv);
    document.querySelector('input').value = '';
}
//3 - вешаем обработчик
btnForAdd.addEventListener("click", isEmpty);


//сделай ренейм переменных (убрать глаголы) UPD: исправлено
//сдедлать кнопки не через div + стилизация UPD: исправлено
//добавить проверку на пустой инпут (повесить оработчик на инпут, чтобы красная подсветка убиралась, когда начинается ввод текста, либо через setTimeout) UPD: добавлено
//localStorage не разобрался
//добавил обработчик на кнопку редактирования