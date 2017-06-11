import ShowInfo from './GetShowInfo';

const Metadata = async(show) => {
    return ShowInfo(show).then((res, err) => {
        const showInfo = res;
        const metaData = showInfo.metadata;
        return metaData
    });
};
// Test if this module is working:
// Metadata('1999-04-16.paf.sbd.unknown.10169.sbeok.flacf').then((res, err) => {
//     console.log(res);
// });

export default Metadata;