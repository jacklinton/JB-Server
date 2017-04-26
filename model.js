import mongoose from 'mongoose';
// Add moment for time/date conversions

const Schema = mongoose.Schema;


const ArtistSchema = Schema({
  id: Int!,
  name: String,
  shows: [Schema.Types.ObjectId],
});

const ShowSchema = Schema({
  id: String!,
  title: String,
  name: String,
  creator: String,
  description: String,
  date: String,
  year: String,
  addedDate: String,
  uploader: String,
  venue: String,
  coverage: String,
  taper: String,
  transferer: String,
  runtime: String,
  notes: String,
  source: String,
  sbd: Boolean,
  songs: [Schema.Types.ObjectId],
  updateddate: String,
});

const SongSchema = Schema({
  id: String!,
  artist: // populate with artist,
  name: String,
  title: String,
  creator: String,
  track: String,
  album: Schema.Types.ObjectId,
  bitrate: String,
  length: String,
  src: String,
  image: String,
});

const ArtistModel = mongoose.model('Artist', ArtistSchema);
const ShowModel = mongoose.model('Show', ShowSchema);
const SongModel = mongoose.model('Song', SongSchema);

export default { ArtistModel, ShowModel, SongModel };
