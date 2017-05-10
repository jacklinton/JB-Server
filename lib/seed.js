import {ArtistModel, ShowModel, SongModel} from './model';
import moment from 'moment';
import axios from 'axios';

const scrape = 'https://archive.org/services/search/v1/scrape?debug=false&xvar=production&total_only=false&cursor=W3siaWRlbnRpZmllciI6ImdkODctMDQtMTcuc2Nob2Vwcy5lRC4xMTY1OC5zYmVvay5zaG5mIn1d&count=10000&fields=identifier&q=GratefulDead'
var identifier;

const Items = async () => {
    const resp = await axios.get(scrape);
    return resp.data.items;
};

const Shows = Items.map((item) =>{
    let identifier =  item.identifier;
    let url;

    if (identifier.startsWith('gd') || identifier.startsWith('GratefulDead') || identifier.startsWith('gratefuldead') ){
        url = "https://archive.org/metadata/" + identifier;
        return url;
    } else {
        return "https://archive.org/metadata/";
    }
});

Shows.forEach( async (show) => {
    let callItem = await axios.get(show);
    let dbItem = JSON.parse(callItem.data);
    let metadata = dbItem.metadata;
    let files = dbItem.files;
    let SBD = metadata.source.includes( 'SBD'||'sbd'||'soundboard'||'Soundboard' );
    let mp3s = files.filter( (i) => { return i.name.endsWith('mp3') });
    let IMGs = files.filter( (i) => { return i.name.endsWith('jpg') || i.name.endsWith('jpeg') });
    let thisShow;

    let show = new ShowModel({
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
        songs: [],
        updateddate: metadata.updateddate,
    });
    show.save( function(err) {
        if (err) console.log(err);
        thisShow = ShowModel.findOne({ identifier: metadata.identifier })
    });
    mp3s.forEach( (mp3) => {
        let song = new SongModel({
            artist: ,
            name: mp3.name,
            title: mp3.title,
            creator: mp3.creator,
            track: parseInt(mp3.track),
            album: mp3.album,
            bitrate: mp3.bitrate,
            length: mp3.length,
            src: "https://www.archive.org/download/" + metadata.identifier + "/" + mp3.name,
            images: IMGs,
        });
        song.save( function(err) {
            if (err) console.log(err);
            let thisSong = SongModel.findOne({ name: mp3.name })
            thisShow.update(songs.push(thisSong.id));
        })
    });
    if(ArtistModel.findOne({ name: metadata.creator })) {
        let artist = ArtistModel.findOne({ name: metadata.creator });
        artist.shows.push(thisShow.id);
    } else {
        let artist = new ArtistModel({
            name: metadata.creator,
            shows: [],
        });
        artist.save( function(err) {
            if(err) console.log(err);
        })
    }

});

