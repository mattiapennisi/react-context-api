import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PostsContext from './contexts/PostsContext.jsx'

import posts from '../data/posts.js'

import DefaultLayout from './layouts/DefaultLayout.jsx'

import Home from './pages/Home.jsx'

function App() {

  return (
    <>
      <PostsContext>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout.jsx />}>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsContext>
    </>
  )
}

export default App