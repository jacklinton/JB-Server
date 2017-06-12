import Show from './show';

const Artist = `
  type Artist {
    _id: String
    name: String
    identifier: String
    shows: [Show]
  }
`;

export default () => [Artist, Show];
