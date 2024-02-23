import PropTypes from 'prop-types';
import { useEffect, useState } from "react"

export const GetAnimeData = (anime) => {

    const [animes, setAnimes] = useState([])

    const getAnimes = async() => {
        const newAnimes = await getAsynData(anime);
        setAnimes(newAnimes);
    }

    useEffect(() => {
        getAnimes();
    }, [anime]);

    return {
        animes
    }
    
}

const getAsynData = async(anime) => {
    const url = `https://back-anime-mania.vercel.app/anime?name=${anime}`;
    const resp = await fetch( url );
    const data = await resp.json();
    return data
}

GetAnimeData.propTypes = {
  anime: PropTypes.string.isRequired 
};
