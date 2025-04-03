import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PostsContext from './contexts/PostsContext.jsx'

import DefaultLayout from './layouts/DefaultLayout.jsx'

import Home from './pages/Home.jsx'
import PostsPage from './pages/PostsPage.jsx'

import posts from '../data/posts.js'

function App() {

  return (
    <>
      <PostsContext.Provider value={{ posts }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<PostsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsContext.Provider>
    </>
  )
}

export default App