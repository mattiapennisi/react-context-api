import { useContext } from 'react'
import PostsContext from '../contexts/PostsContext.jsx'

export default function PostCard() {
    const { posts } = useContext(PostsContext)

    const post = posts.find(post => post.id === 1)

    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <div className='p-4'>
        <h1 className='text-center my-4'>{post.title}</h1>

        <p>{post.body}</p>
        </div>
    )
}