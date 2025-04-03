import { useContext } from 'react'

import { Link } from 'react-router-dom'

import PostsContext from '../contexts/PostsContext.jsx'

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
                            <Link to={`/posts/${post.id}`}>
                                <div className="btn btn-primary m-3">Open Post</div>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}