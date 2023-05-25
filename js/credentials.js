const credentials = (function() {
    function isOpen(popup) {
        return popup.open ? true : false
    }

    return {
        isOpen
    }
})()