const elements = document.querySelectorAll('[year="current"]');
const currentYear = new Date().getFullYear();
elements.forEach(element => {
    element.textContent = currentYear;
});
