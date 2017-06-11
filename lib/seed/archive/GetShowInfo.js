import axios from 'axios';

const ShowInfo = async(show) => {
    const baseUrl = "https://archive.org/metadata/";
    const data = await axios.get(baseUrl + show);
    const showInfo = data.data;
    return showInfo;
};

// Test if this module is working:
// ShowInfo('1999-04-16.paf.sbd.unknown.10169.sbeok.flacf').then((res, err) => {
//     console.log(res);
// });

export default ShowInfo;