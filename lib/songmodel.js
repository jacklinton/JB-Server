import mongoose from 'mongoose';
// Add moment for time/date conversions

const Schema = mongoose.Schema;

const SongSchema = Schema({
    artist: Schema.Types.ObjectId,
    name: String,
    title: String,
    creator: String,
    track: Number,
    album: Schema.Types.ObjectId,
    bitrate: String,
    length: String,
    src: String,
    image: String,
});

const Song = mongoose.model('Song', SongSchema);

export default Song;