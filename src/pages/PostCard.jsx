import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import PostsContext from '../contexts/PostsContext.jsx'

export default function PostCard() {
    const { posts } = useContext(PostsContext)

    const { id } = useParams()

    const post = posts.find(post => post.id === Number(id))

    if (!post) {
        return <h2 className='m-2'>Post not found</h2>
    }

    return (
        <div className='p-4'>
            <h1 className='text-center my-4'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}