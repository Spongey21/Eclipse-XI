const credentials = (function() {
    function openAndClosePopup(el) {
        if (el.open) {
            el.close()
        } else {
            el.showModal()
        }
    }

    return {
        openAndClosePopup
    }
})()