import { getPosts } from "../data/provider.js";

export const Posts = () => {
    const newPost = getPosts()
    const postHtml = (post) => {
        return `<li>${post.title}</li>
        <img class="post__image" src="${post.imageURL}" alt="${post.description}"></img>
        <p>${post.description} ${new Date(post.timestamp).toLocaleDateString()}</p>`
    }

    let html = `
        <ul>
            ${newPost.map((post) => postHtml(post))}
        </ul>
    `

    return html
}