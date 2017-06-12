import FilesList from './GetFilesList';

const WriteFiles = async(show) => {
    FilesList(show).then((res, err) => {
        const filesList = res;
        filesList.forEach((mp3) => {
            let song = new SongModel({
                name: mp3.name,
                title: mp3.title,
                creator: mp3.creator,
                track: parseInt(mp3.track, 10),
                bitrate: mp3.bitrate,
                length: mp3.length,
                src: "https://www.archive.org/download/" + metadata.identifier + "/" + mp3.name,
                images: IMGs,
            });
            song.save(function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                // let thisSong = Song.findOne({name: mp3.name});
                // let thisShow = Show.findOne({identifier: metadata.identifier});
                // thisSong.update({album: thisShow.id});
                // thisShow.songs.push(thisSong.id);
                console.log(`${song.title} saved!`);
            })
        });
    })
};

export default WriteFiles;


// TODO complete write files code and create write photos??