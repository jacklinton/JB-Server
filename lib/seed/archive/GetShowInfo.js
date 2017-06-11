import axios from 'axios';

const ShowInfo = async(show) => {
    const baseUrl = "https://archive.org/metadata/";
    const data = await axios.get(baseUrl + show);
    const showInfo = data.data;
    return showInfo;
}

export default ShowInfo;