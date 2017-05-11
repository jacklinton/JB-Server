import SongModel from './song';

class Song {
    constructor() {
        this.findSong = (title) => {
            SongModel.find({ title }, (error, data) => {
                return data;
            });
        };
    }
}


export default Song;