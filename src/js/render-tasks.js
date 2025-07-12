import { refs } from "./refs"

export function renderTaskList(tasks) {
    const murkup = tasks.map(task => {
        return `
        <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${task.taskName}</h3>
      <p>${task.taskDescription}</p>
  </li>
        `
    }).join('')

    refs.tasksList.insertAdjacentHTML('afterbegin', murkup)

}