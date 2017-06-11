import ShowInfo from './GetShowInfo';

const PhotosList = async(show) => {
    return ShowInfo(show).then((res, err) => {
        const showInfo = res;
        const filesList = showInfo.files;
        const filteredList = filterFiles(filesList);
        return filteredList;
    });

    function filterFiles(files) {
        let photos = files.filter((i) => {
            return i.name.endsWith('jpg') || i.name.endsWith('jpeg');
        });
        return photos;
    }
};

// Test if this module is working:
// PhotosList('um2007-10-04.flac16 ').then((res, err) => {
//     console.log(res);
// });

export default PhotosList;