// import axios from 'axios';
const axios = require('axios');
const repl = require('babel-repl');

repl.start({
    prompt: "es6>> ",
    useColor: true
});


const ArtistList = async () => {
    const artistScrape = 'https://archive.org/services/search/beta/scrape.php?debug=false&xvar=production&total_only=false&count=10000&fields=identifier&q=collection%20AND%20etree'
    const artistsResp = await axios.get(artistScrape);
    const artists = artistsResp.data.items;
    const artistsFilter = await artists.filter((artist) => {
        return artist.includes('/[^._&+-]/g');
    });
    console.log(artistsFilter)
}
ArtistList();