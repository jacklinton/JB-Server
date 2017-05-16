import Artist from './artist';
import Show from './show';

const Song = `
  type Song {
    _id: String
    artist: Artist
    name: String
    title: String
    creator: String
    track: Int
    album: Show
    bitrate: String
    length: String
    src: String
    images: [String]
  }
`;

export default () => [Song, Artist, Show];
