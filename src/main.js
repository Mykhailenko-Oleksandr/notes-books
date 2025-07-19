import { refs } from './js/refs'
import { onHeaderFormSubmit, onTasksListClick } from "./js/handlers";
import { deployLocalStorage, deployThemeToggle } from './js/local-storage-api';
import { ontTemeToggleClick } from './js/theme-switcher';

refs.headerForm.addEventListener('submit', onHeaderFormSubmit);
refs.tasksList.addEventListener('click', onTasksListClick);
refs.themeToggle.addEventListener('click', ontTemeToggleClick);

deployLocalStorage();
deployThemeToggle();

