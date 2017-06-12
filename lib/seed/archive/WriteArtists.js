import ArtistList from './GetArtistList';
import ArtistModel from '../../model';


const WriteArtists = async() => {
    ArtistList().then((res, err) => {
        const artistList = res;
        artistList.forEach((a) => {
            const artist = new ArtistModel({
                identifier: a
            });
            artist.save(function(err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`${artist.identifier} was saved!`);
                }
            });
        });
    });
};

export default WriteArtists;

// Test if this module is working:
// WriteArtists().then((res, err) => {
//     console.log(res);
// });