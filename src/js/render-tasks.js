import { refs } from "./refs"

export function renderTaskList(tasksArr) {
    const createMurkup = tasksArr.map(({ taskName, taskDescription }) => `
        <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${taskName}</h3>
      <p>${taskDescription}</p>
  </li> `).join('');

    refs.tasksList.innerHTML = createMurkup;
}