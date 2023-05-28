import React, { useState } from 'react'
import './style.css'
import { LoadImages, SearchImages } from './api'
import Image from './Image'

const Search = () => {
    const [query, setQuery] = useState()
    const [searchQ, setSearchQ] = useState()

    const data = LoadImages();

    const search = () => {
        setSearchQ(query)
    }
    const searchData = (SearchImages(searchQ))

    return (
        <>
            <div className="div">
                <input type="text" placeholder='Search image here'
                    onChange={e => setQuery(e.target.value)} />
                <button onClick={search}>Search</button>
            </div>

            <div className="container">
                {searchQ ? searchData.map((img, key) => (
                    <Image src={img.urls.small} key={key} />
                )) : data.map((img, key) => (
                    <Image src={img.urls.small} key={key} />
                ))}
            </div>
        </>
    )
}
export default Search