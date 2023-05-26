const MENU = document.querySelector('.navigationHeader__list')
const BURGERMENU = document.querySelector('.burgerMenu')

const CLOSE_MENU = document.querySelectorAll('.login__close, .register__close')
const LOGIN_BTNS = document.querySelectorAll('.credentials')
const LOGIN_MENU = document.querySelector('.login')
const LOGINREGISTER_BTN = document.querySelector('.login__register')
const LOGIN_CONTAINER = document.querySelector('.login__container')

const REGISTER_MENU = document.querySelector('.register')
const REGISTER_REGISTER = document.querySelector('.register__register')
const REGISTER_INPUTS = document.querySelectorAll('.register__input')

BURGERMENU.addEventListener('click', function (e) {
    menu.toggle(MENU)

    if (menu.toggle(MENU)) {
        MENU.style.display = ''
    } else {
        MENU.style.display = 'flex'
    }
})

LOGIN_BTNS.forEach(function (btn) {
    btn.addEventListener('click', function () {
        LOGIN_MENU.showModal()
    })
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
    // verifies the data from the registering form
    if (credentials.register(REGISTER_INPUTS[0].value, REGISTER_INPUTS[1].value, REGISTER_INPUTS[2].value)) {
        localStorage.setItem('username', REGISTER_INPUTS[0].value)
        localStorage.setItem('password', REGISTER_INPUTS[1].value)
    
        REGISTER_MENU.close()
        REGISTER_MENU.showModal()
    } else {
        console.log('error');
    }
})