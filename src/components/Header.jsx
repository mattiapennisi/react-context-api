import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header id="header">
            <NavLink to='/' className='btn btn-primary m-2'>Home </NavLink>

            <NavLink to='/posts' className='btn btn-primary m-2'>Posts</NavLink>
        </header>
    )
}