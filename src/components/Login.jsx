/* eslint-disable no-unused-vars */

import React from 'react'
import Imagen from '../assets/Mobile.png'
import imagenProfile from '../assets/profile1.jpg'

const Login = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md4">
                <div className="padre">
                    <div className="card card-body">
                        <form>
                         <input type="text" placeholder='Ingresar Email'/>
                         <input type="password" placeholder='Ingresar Contraseña' />
                         <button>Registrarse</button>
                        </form>

                    </div>
                </div>
            </div>

            <div className="col-md8">
                <img src={Imagen} alt="" className='tamaño-imagen'/>

            </div>
        </div>
        
    </div>
  )
}
export default Login