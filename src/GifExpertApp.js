
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];    
    
    const [categories, setCategories] = useState(['Dragon Ball']);
    
    // const handleApp = () => { // Agregamos mas valores cuando demos click

    //     // setCategories( [ 'One Piece', ...categories ] ); // Agregamos al inicio  ...categories = al arreglo original
    //     // setCategories( [...categories, 'One Piece' ] ); // Agregamos al final    ...categories = al arreglo original
    //        setCategories( cats => [...cats, 'One Piece' ] ); // cats => (genera un nuevo arreglo) con [...arreglo original + nuevo elemento] se hace con CallBack
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={ handleApp }>Agregar</button>   */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } /> 
                    ))
                }
            </ol>
        </>
    )
}
