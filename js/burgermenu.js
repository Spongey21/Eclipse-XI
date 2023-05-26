const menu = (function() {
    function toggle(element) {
        element.style.display == 'flex' ? true : false
    }

    return {
        toggle
    }
})()