const credentials = (function() {
    // allows only letters and numbers
    const NumbersAndLettersOnly = /[^\d\p{L}]/u

    function usernameVerify(username) {
        return !NumbersAndLettersOnly.test(username) && username.length >= 2
    }

    function passwordVerify(password, repeatPw) {
       return !NumbersAndLettersOnly.test(password) && password == repeatPw && password.length >= 8
    }

    function register(username, password, repeatPW) {
        return usernameVerify(username) && passwordVerify(password, repeatPW)
    }

    function login(username, password) {
        return username == localStorage.getItem('username') && password == localStorage.getItem('password')
    }

    return {
        register,
        login
    }
})()