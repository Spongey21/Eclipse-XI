const MENU = document.querySelector('.navigationHeader__list')
const BURGERMENU = document.querySelector('.burgerMenu')
const LOGIN_BTNS = document.querySelectorAll('.credentials')
const LOGIN_MENU = document.querySelector('.login')
const REGISTER_BTN = document.querySelector('.login__register')
const REGISTER_MENU = document.querySelector('.register')
const CLOSE_MENU = document.querySelectorAll('.login__close, .register__close')

BURGERMENU.addEventListener('click', function (e) {
    menu.toggle(MENU)
})

LOGIN_BTNS.forEach(function (btn) {
    btn.addEventListener('click', function () {
        LOGIN_MENU.showModal()
    })
})

REGISTER_BTN.addEventListener('click', function () {
    LOGIN_MENU.close()
    REGISTER_MENU.showModal()
})

CLOSE_MENU.forEach(function(close) {
    close.addEventListener('click', function(e) {
        e.target.parentNode.close()
    })
})