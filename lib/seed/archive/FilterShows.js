const Shows = Items.filter(async (item) => {
    const baseUrl = "https://archive.org/metadata/";
    const data = await axios.get(baseUrl + item.identifier);
    const showInfo = data.data.metadata.collection;
    if (showInfo.includes('etree') && showInfo.includes(identifier)){
        return item;
        console.log(item);
    }
});
export default Shows;
