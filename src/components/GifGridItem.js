import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( { title, url } ) => { // title y url es lo que recibiremos

    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt={ title } /> { /*muestra la imagen*/} 
            <p> { title } </p>  { /*muestra el titulo de la imagen*/}
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired, // asi pedimos que haya un url y title 
    url: PropTypes.string.isRequired
}
