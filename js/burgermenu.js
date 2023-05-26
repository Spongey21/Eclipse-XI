const menu = (function() {
    function toggle(element) {
        if (element.style.display == 'flex') {
            return true
        } else {
            return false
        }
    }

    return {
        toggle
    }
})()