import ShowInfo from './GetShowInfo';

const FilesList = async(show) => {
    return ShowInfo(show).then((res, err) => {
        const showInfo = res;
        const filesList = showInfo.files;
        const filteredList = filterFiles(filesList);
        return filteredList;
    });

    function filterFiles(files) {
        let mp3s = files.filter((i) => {
            return i.name.endsWith('mp3');
        });
        return mp3s;
    }
};

// Test if this module is working:
// FilesList('1999-04-16.paf.sbd.unknown.10169.sbeok.flacf').then((res, err) => {
//     console.log(res);
// });

export default FilesList;


