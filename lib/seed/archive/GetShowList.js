import axios from 'axios';

export default const ShowList = async (artist) => {
    const scrape = 'https://archive.org/services/search/beta/scrape.php?debug=false&xvar=production&total_only=false&count=10000&fields=identifier&q='
    let identifier = artist;

    const resp = await axios.get(scrape + idenfifier);
    const Items = resp.data.items;
    const Shows = Items.map(async (item) => {
        const baseUrl = "https://archive.org/metadata/";
        const data = await axios.get(baseUrl + item);
        if (data.metadata.collection === [identifier, 'etree']){
            return item;
        }
    })
    return Shows;
}
