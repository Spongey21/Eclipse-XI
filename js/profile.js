// burgermenu
const MENU = document.querySelector('.navigationHeader__list')
const BURGERMENU = document.querySelector('.burgerMenu')

// profile
const USERNAME = document.querySelector('.profileInfo__username')
const PASSWORD = document.querySelector('.profileInfo__passwordText')
const PASSWORD_REVEAL = document.querySelector('.profileInfo__revealPassword')

BURGERMENU.addEventListener('click', function (e) {
    MENU.classList.toggle('show')
})

USERNAME.textContent = 'Username: ' + localStorage.getItem('username')
PASSWORD.textContent = 'Password: ' + '*'.repeat(localStorage.getItem('password').length)

PASSWORD_REVEAL.addEventListener('click', function() {
    if (PASSWORD.textContent.includes('*')) {
        PASSWORD.textContent = 'Password: ' + localStorage.getItem('password')
    } else {
        PASSWORD.textContent = 'Password: ' + '*'.repeat(localStorage.getItem('password').length)
    }
})