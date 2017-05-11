import Artist from './model';
import Show from './showmodel';
import Song from './songmodel';
import moment from 'moment';
import axios from 'axios';

const seed = () => {
    const scrape = 'https://archive.org/services/search/v1/scrape?debug=false&xvar=production&total_only=false&cursor=W3siaWRlbnRpZmllciI6ImdkODctMDQtMTcuc2Nob2Vwcy5lRC4xMTY1OC5zYmVvay5zaG5mIn1d&count=10000&fields=identifier&q=GratefulDead'
    var identifier;
    var Items;

    const Archive = async () => {
        const resp = await axios.get(scrape);
        Items = resp.data.items;
        const Shows = Items.map((item) => {
            let identifier = item.identifier;
            let url;

            if (identifier.startsWith('gd') || identifier.startsWith('GratefulDead') || identifier.startsWith('gratefuldead')) {
                url = "https://archive.org/metadata/" + identifier;
                return url;
            } else {
                return "https://archive.org/metadata/";
            }
        });
        Shows.forEach(async (url) => {
            let callItem = await axios.get(url);
            let dbItem = callItem.data;
            let metadata = dbItem.metadata;
            let files = dbItem.files;
            let SBD = metadata.source.includes('SBD' || 'sbd' || 'soundboard' || 'Soundboard');
            let mp3s = files.filter((i) => {
                return i.name.endsWith('mp3')
            });
            let IMGs = await files.filter((i) => {
                return i.name.endsWith('jpg') || i.name.endsWith('jpeg')
            });
            let thisShow;

            let show = new Show({
                identifier: metadata.identifier,
                title: metadata.title,
                name: metadata.name,
                creator: metadata.creator,
                description: metadata.description,
                date: moment(metadata.date, "YYYY-MM-DD"),
                year: moment(metadata.year, "YYYY"),
                addedDate: metadata.addedDate,
                uploader: metadata.uploader,
                venue: metadata.venue,
                coverage: metadata.coverage,
                taper: metadata.taper,
                transferer: metadata.transferer,
                runtime: metadata.runtime,
                notes: metadata.notes,
                source: metadata.source,
                sbd: SBD,
                updateddate: metadata.updateddate,
            });
            show.save(function (err) {
                if (err) {
                    console.log(err);
                }
                console.log(`${show.title} saved!`);
            });
        });
        Shows.forEach(async (url) => {
            let callItem = await axios.get(url);
            let dbItem = callItem.data;
            let metadata = dbItem.metadata;
            let files = dbItem.files;
            let SBD = metadata.source.includes('SBD' || 'sbd' || 'soundboard' || 'Soundboard');
            let mp3s = files.filter((i) => {
                return i.name.endsWith('mp3')
            });
            let IMGs = await files.filter((i) => {
                return i.name.endsWith('jpg') || i.name.endsWith('jpeg')
            });
            await mp3s.forEach((mp3) => {
                let song = new Song({
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
        });
        Shows.forEach(async (url) => {
            let callItem = await axios.get(url);
            let dbItem = callItem.data;
            let metadata = dbItem.metadata;
            let files = dbItem.files;
            let SBD = metadata.source.includes('SBD' || 'sbd' || 'soundboard' || 'Soundboard');
            let mp3s = files.filter((i) => {
                return  i.name.endsWith('mp3')
            });
            let IMGs = await files.filter((i) => {
                return i.name.endsWith('jpg') || i.name.endsWith('jpeg')
            });
            if (Artist.findOne({name: metadata.creator}))  {
                let artist = Artist.findOne({name: metadata.creator});
                // let thisShow = Show.findOne({identifier: metadata.identifier});
                // let thisSong = Song.findOne({name: mp3.name});
                // thisSong.update({artist: artist.id});
                // artist.shows.push(thisShow.id);
                // console.log()
                return;
            } else {
                let artist = await new Artist({
                    name: metadata.creator,
                });
                artist.save(function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(`${artist.name} was saved!`);
                    // let thisSong = Song.findOne({name: mp3.name});
                    // thisSong.update({artist: artist.id});
                })
            }

        });
    };
    Archive();
};

export default seed;