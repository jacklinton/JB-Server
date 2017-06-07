import axios from 'axios';
import ArtistList from 'GetArtistList';

const Identifiers = ArtistList;

const ShowList = async () => {
    const scrape = 'https://archive.org/services/search/v1/scrape?debug=false&xvar=production&total_only=false&cursor=W3siaWRlbnRpZmllciI6ImdkODctMDQtMTcuc2Nob2Vwcy5lRC4xMTY1OC5zYmVvay5zaG5mIn1d&count=10000&fields=identifier&q='
    let identifier;
    let Items;

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
};

export default ShowList;