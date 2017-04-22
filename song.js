import Artist from './artist';
import Show from './show';

const Song = `
  Song {
    id: String!
    artist: Artist
    name: String
    title: String
    creator: String
    track: String
    album: Show
    bitrate: String
    length: String
    src: String
    image: String
  }
`;

export default () => [Song, Artist, Show]
