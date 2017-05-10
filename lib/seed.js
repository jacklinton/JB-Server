import axios from 'axios';

const scrape = 'https://archive.org/services/search/v1/scrape?debug=false&xvar=production&total_only=false&cursor=W3siaWRlbnRpZmllciI6ImdkODctMDQtMTcuc2Nob2Vwcy5lRC4xMTY1OC5zYmVvay5zaG5mIn1d&count=10000&fields=identifier&q=GratefulDead'
var identifier;
var shows;

const Items = async () => {
    const resp = await axios.get(scrape);
    return resp.data.items;
}

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

const Show = Shows.forEach( async (show) => {
    const callItem = await axios.get(show);
    const dbItem = await callItem.data

})



    }))
  .then( (shows) => {
    shows.forEach((url) => {
      var tune;
      fetch(url)
      .then;
  });















// if (Shows.find().count() === 0) {
//   const scrape = 'https://archive.org/services/search/v1/scrape?debug=false&xvar=production&total_only=false&cursor=W3siaWRlbnRpZmllciI6ImdkODctMDQtMTcuc2Nob2Vwcy5lRC4xMTY1OC5zYmVvay5zaG5mIn1d&count=10000&fields=identifier&q=GratefulDead';
//   var collection = '';
//   var scraper = scrape + collection;
//   var identifier;
//   var Item = new Promise((resolve, reject) => {
//     HTTP.call('GET', scraper, {}, (er, res) => {
//       resolve(res.data.items);
//     });
//   });
//
//   Item.then((items) => {
//     var Shows = new Promise((resolve, reject) => {
//         var shows = items.map( (item) => {
//           identifier = item.identifier;
//           let url;
//
//             if (identifier.startsWith('gd') || identifier.startsWith('GratefulDead') || identifier.startsWith('gratefuldead') /*|| identifier.startsWith('furthur')|| identifier.startsWith('Further')|| identifier.startsWith('ffurthur')|| identifier.startsWith('PLQ')|| identifier.startsWith('Pf')
//             || identifier.startsWith('Phil')|| identifier.startsWith('PhilAndFriends')|| identifier.startsWith('PhilLesh')|| identifier.startsWith('PhilLeshAndFriends')|| identifier.startsWith('PhilandFriends')|| identifier.startsWith('phillesh')|| identifier.startsWith('philrad')|| identifier.startsWith('plaf')|| identifier.startsWith('plandf')||
//              identifier.startsWith('plf')|| identifier.startsWith('plq')|| identifier.startsWith('pa')|| identifier.startsWith('paf')|| identifier.startsWith('pf')|| identifier.startsWith('phil')|| identifier.startsWith('philandfriends')*/ ){
//               url = "https://archive.org/metadata/" + identifier;
//               return url;
//             } else {
//               return "https://archive.org/metadata/";
//             }
//
//         });
//       resolve(shows);
//     });
//
//   Shows.then((shows) => {
//     console.log(shows);
//
//     shows.forEach((url) => {
//
//           var tune;
//           HTTP.call('GET', url, async (error, res) => {
//             tune = await res.data;
//             show = await EJSON.fromJSONValue(tune)
//
//             var metaD = await show.metadata;
//             var sbd = await metaD.source.includes( 'SBD'||'sbd'||'soundboard'||'Soundboard' );
//             var files = await tune.files;
//             var mp3s = await files.filter( (i) => { return i.name.endsWith('mp3') });
//             var images = await files.filter( (i) => { return i.name.endsWith('jpg') || i.name.endsWith('jpeg') });
//
//             await mp3s.forEach((song) => {
//                   Songs.insert({
//                     artist: "Grateful Dead",
//                     src: "https://www.archive.org/download/" + identifier + "/" + song.name,
//                     name: song.name,
//                     title: song.title,
//                     creator: song.creator,
//                     track: song.track,
//                     album: song.album,
//                     bitrate: song.bitrate,
//                     length: song.length,
//                     image: images,
//                     sbd: sbd,
//                     metadata: metaD,
//                 })
//               });
//         // HTTP.call('GET', url, async (error, res) => {
//         //   tune = await res.data;
//         //   show = await EJSON.fromJSONValue(tune)
//         //   var metaD = await show.metadata;
//         //   await Shows.insert({identifier: metaD.identifier,
//         //        title: metaD.title,
//         //        name: metaD.name,
//         //        creator: metaD.creator,
//         //        description: metaD.description,
//         //        date: metaD.date,
//         //        year: metaD.year,
//         //        addeddate: metaD.addeddate,
//         //        uploader: metaD.uploader,
//         //        venue: metaD.venue,
//         //        coverage: metaD.coverage,
//         //        taper: metaD.taper,
//         //        transferer: metaD.transferer,
//         //        runtime: metaD.runtime,
//         //        notes: metaD.notes,
//         //        source: metaD.source,
//         //        sbd: sbd,
//         //        songs:[mp3s.forEach((mp3) => {
//         //          mp3.name,
//         //          mp3.title,
//         //          mp3.track,
//         //          mp3.album,
//         //          mp3.length
//         //        })],
//         //        updateddate: metaD.updateddate,
//         //     })
//         //   });
//         });
//         console.log("DONE");
//       });
//     });
//   });
// };
