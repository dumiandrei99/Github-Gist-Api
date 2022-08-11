import React, {useState, useEffect} from 'react'
import '../App.css'
import { getAllForkers } from '../api/api_caller'

const GistCard = (props) => {

    let tags = []
    const [forkers, setForkers] = useState(null)

    useEffect(() => {  

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

    for (let file in props.files) { 
        let tag = props.files[file].language

        if (! tags.includes(tag)) { 
            tags.push(tag)
        }
    }

    return (
        <div className="gist-card">
            <div className="description-wrapper">
                <a href="localhost:3000" className="gist-description">{props.description.length > 0 ? props.description : "No description"}</a>
            </div>

            <div className="tag-forks-wrapper">
                <span className="gist-forkers-language">File types: </span>
                {tags.map((tag, index) => {
                    return (
                        <span key={index} className="gist-tag">{tag}</span>
                    )
                })}
            </div>

            <div className="tag-forks-wrapper">
                <span className="gist-forkers-language">Last forkers: </span>
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
        </div>
    )
}

export default GistCard