import ShowInfo from './GetShowInfo';

const PhotosList = async(show) => {
    return ShowInfo(show).then((res, err) => {
        const showInfo = res;
        const filesList = showInfo.files;
        const filteredList = filterFiles(filesList);
        const namesList = keepNames(filteredList);
        return namesList;
    });

    function filterFiles(files) {
        let photos = files.filter((i) => {
            return i.name.endsWith('jpg') || i.name.endsWith('jpeg');
        });
        return photos;
    }

    function keepNames(files) {
       return files.map((file) => {
            return "https://www.archive.org/download/" + show + "/" + file.name;
        })
    }
};

// // Test if this module is working:
// PhotosList('um2007-10-04.flac16 ').then((res, err) => {
//     console.log(res);
// });

export default PhotosList;