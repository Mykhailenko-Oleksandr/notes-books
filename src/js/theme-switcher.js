import { localStorageThemeToggle } from "./local-storage-api";
import { refs } from "./refs";

export function ontTemeToggleClick() {
    if (refs.bodyEl.classList.contains('theme-dark')) {
        refs.bodyEl.classList.replace('theme-dark', 'theme-light');
        localStorageThemeToggle('theme-light');
        
    } else if (refs.bodyEl.classList.contains('theme-light')) {
        refs.bodyEl.classList.replace('theme-light', 'theme-dark');
        localStorageThemeToggle('theme-dark');
    }
}