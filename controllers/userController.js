import { check, validationResult } from 'express-validator'
import User from '../models/User.js'

const formLogin =  (req, res) => {
    res.render('auth/login', {
        page: 'Log in'
    });
};

//------------------------------------------------------------------------------------

const formRegister =  (req, res) => {
    res.render('auth/register', {
        page: 'Create account'
    });
};

const register = async(req, res) => {
    //validación
    await check('name').notEmpty().run(req);

    let result = validationResult(req);
    res.json(result.array);

    const user = await User.create(req.body);
    res.json(user);
};

//------------------------------------------------------------------------------------

const formForgotPassword =  (req, res) => {
    res.render('auth/forgot_password', { //esta es la dirección de la vista
        page: 'Forgot Password'
    });
};

//------------------------------------------------------------------------------------

export {
    formLogin,
    formRegister,
    register,
    formForgotPassword
}