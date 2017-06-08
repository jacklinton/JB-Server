import axios from 'axios';

let ArtistList = async () => {
    const artistScrape = 'https://archive.org/services/search/beta/scrape.php?debug=false&xvar=production&total_only=false&count=10000&fields=identifier&q=collection%20AND%20etree'
    const artistsResp = await axios.get(artistScrape);
    const artists = artistsResp.data.items.map((item) => {
        return item.identifier;
    });
    const artistList = artists.filter((artist) => {
        if (artist.includes('.') && artist.includes('-')) && twoDashes(artist){
            return;
        } else {
            return artist;
        }
    })
    return artistList;

    function twoDashes(item) {
        let numberOfDashes = 0;
        for(let char of item) {
            if (char === '-') {
                numberOfDashes += 1;
            }
        }
        if (numberOfDashes > 1) {
            return true;
        }
    }
}

export default ArtistList;