import { tasks } from "./handlers";
import { refs } from "./refs";
import { renderTaskList } from "./render-tasks";


export function craeteLocalStorageApi(arr) {
    localStorage.setItem('tasks', JSON.stringify(arr))
}

export function deployLocalStorage() {
    if (localStorage.getItem('tasks')) {
        const parseTasks = JSON.parse(localStorage.getItem("tasks"));

        tasks.push(...parseTasks)

        renderTaskList(parseTasks);
    }
}

export function localStorageThemeToggle(strTheme) {
    localStorage.setItem('theme', strTheme)
}

export function deployThemeToggle() {
    if (localStorage.getItem('theme')) {
        refs.bodyEl.classList = localStorage.getItem('theme');
    }
}