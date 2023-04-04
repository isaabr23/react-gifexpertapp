import React from 'react';
const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas de <GifGridItem / >', () => {
    
    const title = 'Un titulo';
    const url = 'https://local/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/>) // title y url son requeridos ** podemos colocarlo aqui (y no dentro de test) por que lo reutilizaremos en varios test

    test('Debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de tener un parrafo  con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( title );
    })
    
    test('Debe de tener la imagen igual al url y al alt de los props', () => {
        
        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title); 
    })

    test('Debe de tener animate_fdeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__animated') ).toBe( true );
    })
    
})
