import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

export const ProductDetails = () => {
    return (
        <Fragment>
            <MetaData title="Apple iPhone 11, 256GB, Negro"></MetaData>
            <div className='row d-flex justify-content-around'>
                <div className='col-12 col-lg-5 img-fluid' id='imagen_producto'>
                    <img src='../../images/productos/celulares/Apple_iPhone11256.jpg' alt='Imagen del producto' height='450' width='450'></img>
                </div>
                <div className='col-12 col-lg-5 mt-5'>
                    <h3>Apple iPhone 11 256GB Negro</h3>
                    <p id="product_id">Product #3332543</p>
                </div>
            </div>
        </Fragment>
    )
}
