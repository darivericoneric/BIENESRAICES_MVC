const formularioLogin =(req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesión',
    });
}

const formularioRegistro =(req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta',
    });
}

const formularioOlvidePassword =(req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recupera tu acceso a Bienes Raíces',
    });
}

// Exportamos varias funciones desde un mismo archivo
export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword
}