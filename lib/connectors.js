import ArtistModel from './model';

class Artist {
    constructor() {
        this.findArtist = (name) => {
            const band = ArtistModel.findOne({ name }, (error, data) => {
                return data;
            });
            return band;
        };
    }
}


export default Artist;