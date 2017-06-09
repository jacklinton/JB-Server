import axios from 'axios';

let artist = "PhilLeshandFriends";

const ShowList = async (artist) => {
    const scrape = 'https://archive.org/services/search/beta/scrape.php?debug=false&xvar=production&total_only=false&count=10000&fields=identifier&q='
    let identifier = artist;

    const resp = await axios.get(scrape + identifier);
    const Items = resp.data.items;
    const Shows = Items.filter(async (item) => {
        const baseUrl = "https://archive.org/metadata/";
        const data = await axios.get(baseUrl + item.identifier);
        const showInfo = data.data.metadata.collection;
        if (showInfo.includes('etree') && showInfo.includes(identifier)){
            return item;
            console.log(item);
        }
    });
    return Shows;
}

ShowList(artist);

export default ShowList;

//TODO add functionality for scrapes that return with a cursor value to do a second scrape operation.