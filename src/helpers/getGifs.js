

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI ( category ) }&limit=15&api_key=PAFGOUh6yrwuY1ttHXf4OjtCDr4EiIcY`; //encodeURI cambia los espacios por % en caso de que sea necesario
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
 }