import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import SearchButton from '../components/SearchButton'
import GistCard from '../components/GistCard'
import { getAllUserGists } from '../api/api_caller'

const HomeScreen = () => {

    const [text, setText] = useState('')
    const [gists, setGists] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const buttonPressed = async () => {
        const data = await getAllUserGists(text)
        // error message
        if (data.status) { 
            setErrorMessage(data.message + data.status)
            setGists([])
        } else {
            setGists(data)
            setErrorMessage('')
        }
    }

    return (
        <div>
            <SearchBar value={text} onChange={e => setText(e.target.value)}/>
            <SearchButton onClick={buttonPressed}/>
            {errorMessage.length !== 0
            &&
            <div className="error">{errorMessage}</div>
            }
            {gists.length !== 0 
            && 
            gists.map((gist, index) => {
                return(
                    <GistCard 
                    key={index} 
                    description={gist.description} 
                    files={gist.files} 
                    forks_url={gist.forks_url} />
                )
            })
            }
        </div>
    )
}

export default HomeScreen