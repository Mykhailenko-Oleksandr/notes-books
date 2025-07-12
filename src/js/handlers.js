import { refs } from "./refs";
import { renderTaskList } from "./render-tasks";

const tasks = [];

export function onHeaderFormSubmit(event) {
    event.preventDefault();

    const taskName = refs.headerForm.elements.taskName.value.trim()
    const taskDescription = refs.headerForm.elements.taskDescription.value.trim()

    if (taskName === '' || taskDescription === '') {
        alert('Заповніть поля')
        return;
    }

    tasks.push({
        taskName,
        taskDescription
    });

    renderTaskList(tasks)

    event.target.reset();
}