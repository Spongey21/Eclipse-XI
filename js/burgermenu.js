const menu = (function() {
    function toggle(element) {
        console.log(element.style.display);
        if (element.style.display == 'flex') {
            element.style.display = ''
        } else {
            element.style.display = 'flex'
        }
    }

    return {
        toggle
    }
})()