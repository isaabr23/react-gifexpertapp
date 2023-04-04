import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => { //pasamos la destructurizacion de setCategories
    
    const [inputValue, setInputValue] = useState(''); // inputValue = ' ' por defecto *** PERO SIEMPRE SERA EL ULTIMO VALOR (con  sin cambios)
    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ) // ahora usamos el setInputValue que sera el estado nuevo e = evento ** asignamos al target el valor (value)

        console.log('handleInputChange llamado');
    }

    //prevenimos actualizacion por default al apretar enter y no se recarga la pagina completa
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2) { //eliminamos espacios(trim) y si es menor el largo a 2 letras lo insertamos
            
            setCategories( cats => [ inputValue, ...cats ] ); // (callback) ingresamos en inputValue = a lo que se agregara al dar click, y conforme ingresamos se colocara al principio (...cats = el primero inputValue = el ultimo agregado) 
            setInputValue(''); //vaciamos el valor despues del enter para que quede vacio
        }
    }

    return (
        <form onSubmit={ handleSubmit }> 
        <p> { inputValue } </p>
           <input 
                type="text"
                value={ inputValue } // Le asignamos un valor (texto) a la casilla
                onChange={ handleInputChange } // Cambiamos el valor del input
           />
        </form>
    )
}

// Candado para que coloqueos si o si <AddCategory **** setCategories={setCategories} **** /> aqui

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
