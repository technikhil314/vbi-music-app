const { createSong, song } = require("../models/songs");
const { createAlbum } = require("../models/albums");
const { createArtist } = require("../models/artists");

const songs = [{
    "title": "in sapien iaculis congue vivamus",
    "image": "https://source.unsplash.com/random",
    "genre": "Drama"
}, {
    "title": "non ligula pellentesque ultrices",
    "image": "https://source.unsplash.com/random",
    "genre": "Comedy|Romance"
}, {
    "title": "commodo placerat",
    "image": "https://source.unsplash.com/random",
    "genre": "Drama"
}, {
    "title": "proin eu mi nulla",
    "image": "https://source.unsplash.com/random",
    "genre": "Drama|Thriller"
}, {
    "title": "eget eros elementum",
    "image": "https://source.unsplash.com/random",
    "genre": "Comedy"
}, {
    "title": "nonummy integer",
    "image": "https://source.unsplash.com/random",
    "genre": "Documentary"
}, {
    "title": "platea dictumst",
    "image": "https://source.unsplash.com/random",
    "genre": "Drama"
}, {
    "title": "eleifend pede libero quis",
    "image": "https://source.unsplash.com/random",
    "genre": "Action|Sci-Fi|Thriller"
}, {
    "title": "maecenas tristique est et tempus",
    "image": "https://source.unsplash.com/random",
    "genre": "Drama"
}, {
    "title": "et ultrices posuere cubilia curae",
    "image": "https://source.unsplash.com/random",
    "genre": "Drama"
}, {
    "title": "erat tortor sollicitudin mi sit",
    "image": "https://source.unsplash.com/random",
    "genre": "Drama"
}, {
    "title": "ipsum primis in",
    "image": "https://source.unsplash.com/random",
    "genre": "Comedy|Drama"
}, {
    "title": "nec nisi vulputate nonummy maecenas",
    "image": "https://source.unsplash.com/random",
    "genre": "Comedy"
}, {
    "title": "enim sit",
    "image": "https://source.unsplash.com/random",
    "genre": "Comedy|Fantasy"
}, {
    "title": "pellentesque ultrices phasellus id",
    "image": "https://source.unsplash.com/random",
    "genre": "Action|Drama"
}, {
    "title": "justo sollicitudin ut",
    "image": "https://source.unsplash.com/random",
    "genre": "Comedy"
}, {
    "title": "orci luctus et ultrices posuere",
    "image": "https://source.unsplash.com/random",
    "genre": "Comedy|Horror"
}, {
    "title": "duis bibendum",
    "image": "https://source.unsplash.com/random",
    "genre": "Drama|Mystery|Thriller"
}, {
    "title": "non interdum in",
    "image": "https://source.unsplash.com/random",
    "genre": "Children|Comedy"
}, {
    "title": "primis in",
    "image": "https://source.unsplash.com/random",
    "genre": "Action|Comedy|Crime"
}];

const albums = [{
    "title": "Risperidone",
    "image": "https://source.unsplash.com/random"
}, {
    "title": "UPSET STOMACH",
    "image": "https://source.unsplash.com/random"
}, {
    "title": "Terbinafine",
    "image": "https://source.unsplash.com/random"
}, {
    "title": "Aurum Lavender Rose",
    "image": "https://source.unsplash.com/random"
}]

const artists = [{
    "firstName": "Renaldo",
    "lastName": "Ismail",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Dorelia",
    "lastName": "Debow",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Emmanuel",
    "lastName": "Prewett",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Fania",
    "lastName": "Lewton",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Aprilette",
    "lastName": "Bootland",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Othelia",
    "lastName": "Brill",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Aland",
    "lastName": "Semper",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Timoteo",
    "lastName": "Osgarby",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Jemimah",
    "lastName": "Brettell",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Jamie",
    "lastName": "Henworth",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Hollyanne",
    "lastName": "Murr",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Ruthanne",
    "lastName": "Hawket",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Ginnifer",
    "lastName": "Borrow",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Clifford",
    "lastName": "Pochin",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Franciskus",
    "lastName": "Kearey",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Marwin",
    "lastName": "Raiston",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Clemente",
    "lastName": "Olennikov",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Rennie",
    "lastName": "Batsford",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Eberhard",
    "lastName": "Harnes",
    "image": "https://source.unsplash.com/random"
}, {
    "firstName": "Janet",
    "lastName": "Foxon",
    "image": "https://source.unsplash.com/random"
}]

let album;
module.exports = async function () {
    const isSeedData = await song.findByPk(1);
    if (!isSeedData)
        for (let i = 0; i < songs.length; i++) {
            if (i % 5 === 0) {
                album = await createAlbum(albums[Math.floor(i / 5)]);
            }
            const song = await createSong(songs[i]);
            const artist = await createArtist(artists[i])
            await album.addSong(song);
            await song.addArtist(artist);
        }
}