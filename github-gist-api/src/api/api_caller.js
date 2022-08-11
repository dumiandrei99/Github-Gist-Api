import url from './url'

export const getAllUserGists = async (username) => { 
    let gistResponse = await fetch(url.getURLForUser(username), {
        headers: {
            'Accept' : 'application/vnd.github+json'
        }
    })

    let jsonData = await gistResponse.json()
    return jsonData
}
