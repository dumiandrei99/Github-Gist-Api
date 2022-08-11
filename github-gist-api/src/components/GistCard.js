import React, {useState, useEffect} from 'react'
import '../App.css'
import { getAllForkers } from '../api/api_caller'

const GistCard = (props) => {

    let tags = []
    let gistContent = []
    const [forkers, setForkers] = useState(null)
    const [showGistContent, setShowGistContent] = useState(false)

    useEffect(() => {  
        // fetch the forkers data from the gist's api
        // in which we'll find information about the users who forked the gist
        const fetchForkers = async () => {
            const forkersData = await getAllForkers(props.forks_url)
            let forkersArray = []

            for (let fork in forkersData) { 
                if (forkersArray.length < 3) { 
                    let forker = forkersData[fork].owner.login
                    forkersArray.push(forker)
                } else {
                    break
                }
            }
            setForkers(forkersArray)
        }
        
        fetchForkers() 
    }, [props.forks_url])

    // save the file content and the tags in arrays to display them to the user
    for (let file in props.files) { 
        let tag = props.files[file].language

        if (! tags.includes(tag)) { 
            tags.push(tag)
        }

        gistContent.push(file)
    }

    const gistClicked = () => {
        // if the description of the gist has been clicked, it will either show the content on the screen or remove it from it (depending on the current state)
        if (showGistContent === true) {
            setShowGistContent(false)
        } else {
            setShowGistContent(true)
        }
    }

    return (
        <div className="gist-card">
            <div className="description-wrapper">
                <div onClick={gistClicked} className="gist-description">{props.description.length > 0 ? props.description : "No description"}</div>
            </div>

            <div className="tag-forks-content-wrapper">
                <span className="gist-forkers-language-content">File types: </span>
                {tags.map((tag, index) => {
                    return (
                        <span key={index} className="gist-tag">{tag}</span>
                    )
                })}
            </div>

            <div className="tag-forks-content-wrapper">
                <span className="gist-forkers-language-content">Last forkers: </span>
                {forkers == null 
                ?
                    <div>Loading...</div>
                :
                    forkers.map((fork, index) => {
                        return (
                            <span key={index} className="gist-forker">{fork}</span>
                        )
                    })}
            </div> 

            {showGistContent 
            && 
            <div className="tag-forks-content-wrapper">
                <span className="gist-forkers-language-content">Gist content(files): </span>
                {gistContent.map((content, index) => {
                    return (
                        <span key={index} className="gist-content">{content}</span>
                    )
                })}
            </div>
            }
        </div>
    )
}

export default GistCard