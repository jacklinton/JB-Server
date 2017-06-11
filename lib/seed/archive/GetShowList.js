import axios from 'axios';


const ShowList = async (artist) => {
    const scrape = 'https://archive.org/services/search/beta/scrape.php?debug=false&xvar=production&total_only=false&count=10000&fields=identifier&q='
    let identifier = artist;

    const resp = await axios.get(scrape + identifier);
    const items = resp.data.items;
    const Items = items.map((item) => {
        return item.identifier;
    });
    const Shows = await Items.filter(async (item) => {
        const baseUrl = "https://archive.org/metadata/";
        const data = await axios.get(baseUrl + item);
        const showInfo = data.data.metadata.collection;
        if (showInfo.includes('etree') && showInfo.includes(identifier)){
            return item;
        }
    });
    return await Shows;
};


export default ShowList;

//TODO add functionality for scrapes that return with a cursor value to do a second scrape operation.