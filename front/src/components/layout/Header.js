import React, { Fragment } from 'react'

const header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src='./images/BaqueroSystem.png' alt='BaqueroSystem Store'></img>
                </div>
            </div>
            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className='input-group'>
                    <input
                        type='text'
                        id='search_field'
                        class='form-control'
                        placeholder='¿Que deseas buscar hoy?'></input>
                        <div class='input-group-append'>
                            <button id='search-btn' class='btn'>
                                <i class='fa fa-search' aria-hidden='true'>Buscar</i>
                            </button>
                        </div>
                </div>
            </div>
            <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                <button className='btn' id="login-btn">Iniciar Sesión</button>
                <span id='cart' className='ml-3'>Carrito</span>
                <span className='ml1' id='cart_count'>2</span>
            </div>
        </nav>
    </Fragment>
  )
}

export default header