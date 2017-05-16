import Song from './song';

const Show = `
  type Show {
    _id: String
    identifier: String!
    title: String
    name: String
    creator: String
    description: String
    date: String
    year: String
    addedDate: String
    uploader: String
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
