export default {
    getURLForUser: (username) => {
        return `http://api.github.com/users/${username}/gists`
    } 
}