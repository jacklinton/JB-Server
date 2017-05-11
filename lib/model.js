import mongoose from 'mongoose';
// Add moment for time/date conversions

const Schema = mongoose.Schema;


const ArtistSchema = Schema({
  name: String,
  shows: [Schema.Types.ObjectId],
});

const Artist = mongoose.model('Artist', ArtistSchema);

export default Artist;
