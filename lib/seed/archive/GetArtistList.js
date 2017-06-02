import axios from 'axios';

const ArtistList = async () => {
    const artistScrape = 'https://archive.org/services/search/beta/scrape.php?debug=false&xvar=production&total_only=false&count=10000&fields=identifier&q=collection%20AND%20etree'
    const artistsResp = await axios.get(artistScrape);
    const artists = artistsResp.data.items.map((item) => {
        return item.identifier;
    });
    const artistList = artists.filter((artist) => {
        const reg = new RegExp('/[^.-]/g');
        return artist.includes(reg);
    })
    console.log(artistList);
}

ArtistList();
export default ArtistList;