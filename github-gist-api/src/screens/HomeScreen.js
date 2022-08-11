import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import SearchButton from '../components/SearchButton'
import { getAllUserGists } from '../api/api_caller'
const HomeScreen = () => {

    const [text, setText] = useState('')

    const buttonPressed = async () => {
        const data = await getAllUserGists(text)
        console.log(data)
    }

    return (
        <div>
            <SearchBar value={text} onChange={e => setText(e.target.value)}/>
            <SearchButton onClick={buttonPressed}/>
        </div>
    )
}

export default HomeScreen