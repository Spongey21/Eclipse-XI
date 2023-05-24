const MENU = document.querySelector('.navigationHeader__list')
const BURGERMENU = document.querySelector('.burgerMenu')
const POPUP_BTNS = document.querySelectorAll('.credentials')
const POPUP_MENU = document.querySelector('.popup')

BURGERMENU.addEventListener('click', function(e) {
    menu.toggle(MENU)
})

POPUP_BTNS.forEach(function(btn) {
    btn.addEventListener('click', function() {
        credentials.openAndClosePopup(POPUP_MENU)
    })
})