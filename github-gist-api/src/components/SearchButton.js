import React from 'react'
import '../App.css'

const SearchButton = (props) => {
    return (
        <button className="search-button" onClick={props.onClick}>SEARCH</button>
    )
}

export default SearchButton