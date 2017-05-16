import SongModel from './songmodel';
import bodyParser from 'body-parser';

const resolverMap = {
    RootQuery: {
        songs(_, { title }) {
            return SongModel.find({title}).lean().exec((err, res) => {
                return JSON.stringify(res);
            });
            }
        },
    };

export default resolverMap;