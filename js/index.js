// burgermenu
const MENU = document.querySelector('.navigationHeader__list')
const BURGERMENU = document.querySelector('.burgerMenu')

// login- and register menu
const CLOSE_MENU = document.querySelectorAll('.login__close, .register__close')

// login menu
const LOGIN_BTNS = document.querySelectorAll('.credentials')
const LOGIN_MENU = document.querySelector('.login')
const LOGINREGISTER_BTN = document.querySelector('.login__register')
const LOGIN_CONTAINER = document.querySelector('.login__container')
const LOGIN_LOGIN = document.querySelector('.login__login')
const LOGIN_INPUTS = document.querySelectorAll('.login__input')

// register menu
const REGISTER_MENU = document.querySelector('.register')
const REGISTER_REGISTER = document.querySelector('.register__register')
const REGISTER_INPUTS = document.querySelectorAll('.register__input')

function openPopup() {
    LOGIN_MENU.showModal()
}

// checks if user is logged in
if (localStorage.getItem('username') != null) {
    LOGIN_BTNS[0].textContent = 'Profile'
} else {
    LOGIN_BTNS[0].textContent = 'Login'
}

BURGERMENU.addEventListener('click', function (e) {
    MENU.classList.toggle('show')
})

LOGIN_BTNS.forEach(function (btn) {
    btn.addEventListener('click', openPopup)
})


LOGINREGISTER_BTN.addEventListener('click', function () {
    LOGIN_MENU.close()
    REGISTER_MENU.showModal()
})

CLOSE_MENU.forEach(function(close) {
    close.addEventListener('click', function(e) {
        e.target.parentNode.close()
    })
})

// Lets the user register their account
REGISTER_REGISTER.addEventListener('click', function() {
    // validates register info and stores the information
    if (credentials.register(REGISTER_INPUTS[0].value, REGISTER_INPUTS[1].value, REGISTER_INPUTS[2].value)) {
        // database would be inserted instead of localstorage
        localStorage.setItem('username', REGISTER_INPUTS[0].value)
        localStorage.setItem('password', REGISTER_INPUTS[1].value)

        REGISTER_MENU.close()
        LOGIN_MENU.showModal()
    } else {
        console.log('error');
    }
})

LOGIN_LOGIN.addEventListener('click', function() {
    // validates the login info and then convert the same html element into a profile element
    if (credentials.login(LOGIN_INPUTS[0].value, LOGIN_INPUTS[1].value)) {
        LOGIN_MENU.close()

        LOGIN_BTNS[0].textContent = 'Profile'
        LOGIN_BTNS[0].removeEventListener('click', openPopup)

        LOGIN_BTNS[0].addEventListener('click', function() {
            window.location.href = './profile.html'
        })
    } else {
        console.log('wrong pass');
    }
})