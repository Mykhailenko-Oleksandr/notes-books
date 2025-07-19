import { craeteLocalStorageApi } from "./local-storage-api";
import { refs } from "./refs";
import { renderTaskList } from "./render-tasks";

export const tasks = [];

export function onHeaderFormSubmit(event) {
    event.preventDefault();

    const taskName = refs.headerForm.elements.taskName.value.trim();
    const taskDescription = refs.headerForm.elements.taskDescription.value.trim();

    if (taskName === '' || taskDescription === '') {
        alert('Заповніть пусті поля');
        return;
    }

    tasks.push({
        taskName,
        taskDescription
    });

    craeteLocalStorageApi(tasks);

    renderTaskList(tasks);

    event.target.reset();
}

export function onTasksListClick(event) {
    if (!event.target.classList.contains('task-list-item-btn')) {
        return;
    }

    const parentEl = event.target.parentElement;
    const titlePerentEl = parentEl.children[1].innerText;
    const descriptionPerentEl = parentEl.children[2].innerText;
    
    tasks.forEach((task, index) => {
        if (task.taskName === titlePerentEl && task.taskDescription === descriptionPerentEl) {
            tasks.splice(index, 1);
    }
    })
    
    craeteLocalStorageApi(tasks);
    event.target.parentElement.remove();
}