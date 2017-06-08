import ArtistList from './archive/GetArtistList';


ArtistList().then((res, err) => {
    const artistList = res;

    console.log(artistList);
});
