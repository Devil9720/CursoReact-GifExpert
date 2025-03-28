export const getGifs = async (category) => {

    const url = new URL('https://api.giphy.com/v1/gifs/search');
        url.searchParams.set('api_key', 'T2SvW2wtafwrGtMj58zv7gPGt1LTzSy8');
        url.searchParams.set('limit', 10);
        url.searchParams.set('offset', 0);
        url.searchParams.set('rating', 'g');
        url.searchParams.set('lang', 'es');
        url.searchParams.set('q', category);

    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}