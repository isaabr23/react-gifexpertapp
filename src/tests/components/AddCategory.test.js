import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");


describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);
    });

    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } } );

        expect( wrapper.find('p').text().trim() ).toBe( value );
    })

    test('NO dee de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled()

    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';

        //Simulacion de inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        //Simulacion de submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });    

        // setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled(); //llamado (1 vez)
        
        // el valor del input se limpio = ' '
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
        
    
})
