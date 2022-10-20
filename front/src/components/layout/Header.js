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
                                <i class='fa fa-search fa-2x text-white' aria-hidden='true'></i>
                            </button>
                        </div>
                </div>
            </div>
            <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                <span><button className='btn text-white' id="login-btn">Iniciar Sesión</button></span>
                <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
                <span className='ml1' id='cart_count'>2</span>
            </div>
        </nav>
    </Fragment>
  )
}

export default header