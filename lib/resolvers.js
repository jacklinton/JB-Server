import Song from './connectors';

const resolveFunctions = {
    RootQuery: {
        song(_, { title }, context) {
            const song = new Song;
            return song.findSong(title);
        },
    }
};

export default resolveFunctions;