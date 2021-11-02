import { FETCH_POSTS, NEW_POSTS } from "./types";

export const fetchPosts = () => dispatch =>    {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => 
            dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
    
}
export const createPosts = (postData) => dispatch =>    {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body:   JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(post => 
            dispatch({
                type: NEW_POSTS,
                payload: post
            })
        )
}