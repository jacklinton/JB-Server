import Song from './song';

const Show = `
  type Show {
    id: String!
    title: String
    name: String
    creator: String
    description: String
    date: String
    year: String
    addedDate: String
    uplaoder: String
    venue: String
    coverage: String
    taper: String
    transferer: String
    runtime: String
    notes: String
    source: String
    sbd: Boolean
    songs: [Song]
    updateddate: String
  }
`;

export default () => [Show, Song];
