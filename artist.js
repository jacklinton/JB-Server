import Show from './show';

const Artist = `
  type Artist {
    id: Int!
    name: String
    shows: [Show]
  }
`;

export default () => [Artist, Show];
