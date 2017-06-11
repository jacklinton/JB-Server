import ShowInfo from './GetShowInfo';

const FilesList = async(show) => {
    let theshow = show;
    ShowInfo(theshow).then((res, err) => {
        const showInfo = res;
        const filesList = showInfo.files;
        const filteredList = filterFiles(filesList);
        console.log(filteredList);
    });

    function filterFiles(files) {
        let mp3s = files.filter((i) => {
            return i.name.endsWith('mp3')
        });
        return mp3s;
    }
};

FilesList('kvf2002-11-27.shnf');


