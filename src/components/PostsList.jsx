import { useContext } from 'react'

import PostsContext from '../contexts/PostsContext.jsx'

import PostCard from "../pages/PostCard"

export default function PostsList() {

    const { posts } = useContext(PostsContext)

    return (
        <>
            {
                posts.map(post => {
                    return (
                    <div key={post.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{post.title}</h4>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                    )
                })
            }
        </>
    )
}