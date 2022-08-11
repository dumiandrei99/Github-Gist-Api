import url from './url'

export const getAllUserGists = async (username) => { 
    
    let gistResponse = await fetch(url.getURLForUser(username), {
        headers: {
            'Accept' : 'application/vnd.github+json'
        }
    }).then((response) => {
        if (response.status === 200){
            console.log("A")
            return response.json()
        } else {
            let error = {
                message: "ERROR STATUS: ",
                status: response.status
            }
            return error
        }
    }).then((jsonResponse) => {
        return jsonResponse
    })

    return gistResponse
}

export const getAllForkers = async (fork_url) => {
    let forkResponse = await fetch (fork_url, {
        'Accept' : 'application/vnd/github+json'
    })

    let jsonData = await forkResponse.json()
    return jsonData
}
