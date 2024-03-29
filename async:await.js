//ajax request
//https://rallycoding.herokuapp.com/api/music_albums

//ES2015
// function fetchAlbums() {
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//         .then(json => console.log(json));
// }

//fetchAlbums()

//ES2017
const fetchAlbums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
}

fetchAlbums();