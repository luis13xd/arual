import React from 'react';
import './Css/LoginSignup.css';

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h2>Registrate</h2>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Nombre' required/>
            <input type="email" placeholder='Correo' required/>
            <input type="password" placeholder='Contraseña' required/>
          </div>
          <div className="loginsignup-agree">
            <input type='checkbox' name='' id='' />
            <p>Acepto terminos y condiciones</p>
          </div>
          <button>Continuar</button>
          <p className='loginsignup-login'>
            ¿Ya tengo cuenta?
            <span>
              Iniciar sesión
            </span> 
          </p>
        </div>
    </div>
  )
}
