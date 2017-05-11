import SongModel from './songmodel';

class Song {
    constructor() {
        this.findSong = (title) => {
            const song = SongModel.find({ title }, (error, data) => {
                return data;
            });
        };
    }
}


export default Song;