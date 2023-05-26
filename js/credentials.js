const credentials = (function() {
    // allows only letters and numbers
    const NumbersAndLettersOnly = /[^\d\p{L}]/u

    function usernameVerify(username) {
        if (!NumbersAndLettersOnly.test(username) && username.length >= 2) {
            return true
        } else {
            return false
        }
    }

    function passwordVerify(password, repeatPw) {
        if (!NumbersAndLettersOnly.test(password) && password == repeatPw && password.length >= 8) {
            return true
        } else {
            return false
        }
    }

    function register(username, password, repeatPW) {
        if (usernameVerify(username) && passwordVerify(password, repeatPW)) {
            return true
        } else {
            return false
        }
    }

    function login(username, password) {
        if (username == localStorage.getItem('username') && password == localStorage.getItem('password')) {
            return true
        } else {
            return false
        }
    }

    return {
        register,
        login
    }
})()