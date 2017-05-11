import SongModel from './songmodel';

const resolverMap = {
    RootQuery: {
        song(_, { title }) {
            return SongModel.findOne({"title": title});
        },
    }
};

export default resolverMap;