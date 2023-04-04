const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../hooks/useFetchGifs")


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball' ));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('Debe de retornar un arreglo de imgs y el loading falso', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 15 );
        expect( loading ).toBe( false );

    })
    
})
