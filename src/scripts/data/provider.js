const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    users: [],
    posts: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
}


export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
    .then((data)=> data.json())
    .then((users)=> {
        applicationState.users = users
        
    })
}

export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
    .then((data)=> data.json())
    .then((posts)=> {
        applicationState.posts = posts
        
    })
}

export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}

export const getPosts = () => {
    return applicationState.posts.map(post => ({...post}))
}