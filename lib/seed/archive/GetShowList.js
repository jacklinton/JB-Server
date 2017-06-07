import axios from 'axios';
import ArtistList from './GetArtistList';

let poop;

ArtistList().then((res, err) => {
    poop = res;

    const ShowList = poop.map(async (dukey) => {
        //async () => {
            const scrape = 'https://archive.org/services/search/v1/scrape?debug=false&xvar=production&total_only=false&cursor=W3siaWRlbnRpZmllciI6ImdkODctMDQtMTcuc2Nob2Vwcy5lRC4xMTY1OC5zYmVvay5zaG5mIn1d&count=10000&fields=identifier&q='
            let identifier = dukey;
            let Items;

            const resp = await axios.get(scrape + identifier);
            Items = resp.data.items;
            console.log(Items);
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
        }
    )
});

// Artist list -> Show list for each artist (multidimensional array??) -> Metadata for each show and each shows files
// into two separate arrays which are
// then depositied in the database with Model.collection.insert(docs, options, callback).
// Ideally I want seed.js to just call a series of modules and contains few lines of code.
// Maybe I could map over the artist list in seed.js and have the GetShowList module only handle one artist
// at a time... yes I think that's where this should go.
