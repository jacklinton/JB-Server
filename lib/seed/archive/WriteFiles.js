import FilesList from './GetFilesList';
import PhotosList from './GetPhotosList';

const WriteFiles = async(show) => {
    FilesList(show).then((res, err) => {
        const filesList = res;
        PhotosList(show).then((res, err) => {
            const photosList = res;
            filesList.forEach((mp3) => {
                let song = new SongModel({
                    name: mp3.name,
                    title: mp3.title,
                    creator: mp3.creator,
                    track: parseInt(mp3.track, 10),
                    bitrate: mp3.bitrate,
                    length: mp3.length,
                    src: "https://www.archive.org/download/" + metadata.identifier + "/" + mp3.name,
                    images: photosList,
                });
                song.save(function (err) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(`${song.title} saved!`);
                })
            });
        })

    })
};

export default WriteFiles;


// TODO complete write files code and create write photos??