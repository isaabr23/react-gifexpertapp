import React from 'react'

export const GifGridItem = ( { title, url } ) => { // title y url es lo que recibiremos

    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt={ title } /> { /*muestra la imagen*/} 
            <p> { title } </p>  { /*muestra el titulo de la imagen*/}
        </div>
    )
}
