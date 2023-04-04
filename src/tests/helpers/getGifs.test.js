const { getGifs } = require("../../helpers/getGifs")


describe('Pruebas con getGifs Fetch', () => {
    
    test('Debe de traer 15 elementos', async() => { // validaremos que solo debe de traer 15 elementos (imagenes)
         
        const gifs = await getGifs ('One Piece');

        expect( gifs.length ).toBe( 15 );
    })
    
    test('Debe mostrar que trae la categoria', async() => { // validaremos que solo debe de traer 15 elementos (imagenes)
         
        const gifs = await getGifs ( '' );
        // console.log(gifs); // [] cuando ponemos arriba ' '

        expect( gifs.length ).toBe( 0 );
    })
})
