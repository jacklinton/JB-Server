const resolveFunctions = {
    RootQuery: {
        artist(_, { name }, ctx) {
            const artist = new ctx.constructor.Artist();
            return artist.findArtist(name);
        },
    },
};

export default resolveFunctions;