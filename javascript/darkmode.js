let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');


const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled')
}

const diableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null)
}

darkModeToggle.addEventListener('click', () => {
    console.log('test')
});