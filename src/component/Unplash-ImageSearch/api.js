import { useEffect, useState } from 'react'
import axios from 'axios'
const count = 1;
const API_KEY = "ENVOJ4CePRd4VgvKAKwT0_MXGhCID_zSi0B9Tq3lUL4";

function LoadImages() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get("https://api.unsplash.com/photos/?client_id=" + API_KEY)
            .then((data) => {
                setState(data.data)
            })
    }, [count])
    return state;
}
function SearchImages(query) {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get("https://api.unsplash.com/search/photos?query=" + query + "&client_id=" + API_KEY)
            .then((data) => {
                setState(data.data.results);
            });
    }, [query])
    return state;
}

export { LoadImages, SearchImages }