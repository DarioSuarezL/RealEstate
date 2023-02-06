const formLogin =  (req, res) => {
    res.render('auth/login', {
        page: 'Log in'
    })
};

const formRegister =  (req, res) => {
    res.render('auth/register', {
        page: 'Create account'
    })
};

const formForgotPassword =  (req, res) => {
    res.render('auth/forgot_password', { //esta es la dirección de la vista
        page: 'Forgot Password'
    })
};

export {
    formLogin,
    formRegister,
    formForgotPassword
}