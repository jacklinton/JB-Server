import ArtistList from './archive/GetArtistList';
import GetShowList from './archive/GetShowList';

ArtistList().then((res, err) => {
    const artistList = res;


    GetShowList(artistList).then((res, err) => {
        const showList = res;
        console.log(showList);
    })
});

//TODO add in GetShowLIst functionality by looping over ArtistList