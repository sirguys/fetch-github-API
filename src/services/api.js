import axios from 'axios'

const BASE_URL = 'https://api.github.com'

const fetchUsername = username => {
    const URL = BASE_URL + `/users/${username}`

    return axios
        .get(URL)
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}

const fetchUserRepositories = username => {
    const URL = BASE_URL + `/users/${username}/repos?sort=updated`

    return axios
        .get(URL)
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}

const searchUsername = keyword => {
    const URL = BASE_URL + `/search/users?per_page=32&q=${keyword}`

    return axios
        .get(URL)
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}

export default {
    fetchUsername,
    searchUsername,
    fetchUserRepositories
}