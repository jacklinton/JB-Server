import Mongoose from 'mongoose';

const ArtistSchema = Mongoose.schema({
  id: Int!
  name: String
  shows: // [ populate with items with shows collection ]
});

const ShowSchema = Mongoose.schema({
  id: String!,
  title: String,
  name: String,
  creator: String,
  description: String,
  date: String,
  year: String,
  addedDate: String,
  uplaoder: String,
  venue: String,
  coverage: String,
  taper: String,
  transferer: String,
  runtime: String,
  notes: String,
  source: String,
  sbd: Boolean,
  songs: //[ populate with items from song collection ],
  updateddate: String,
});

const SongSchema = Mongoose.schema({
  id: String!,
  artist: Artist,
  name: String,
  title: String,
  creator: String,
  track: String,
  album: // populate with items from show collection
  bitrate: String,
  length: String,
  src: String,
  image: String,
});

const ArtistModel = Mongoose.model('Artist', ArtistSchema);
const ShowModel = Mongoose.model('Show', ShowSchema);
const SongModel = Mongoose.model('Song', SongSchema);

export default { ArtistModel, ShowModel, SongModel };
