import React from 'react'
import '../App.css'

const SearchBar = (props) => {
    return (
        <input className='search-bar' value={props.text} onChange={props.onChange} placeholder={"Enter a username to list all the gists for this user..."} />
    )
}

export default SearchBar