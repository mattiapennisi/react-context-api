import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PostsContext from './contexts/PostsContext.jsx'
import { AlertProvider } from './contexts/AlertContext.jsx'

import DefaultLayout from './layouts/DefaultLayout.jsx'

import Home from './pages/Home.jsx'
import PostsPage from './pages/PostsPage.jsx'
import PostCard from './pages/PostCard.jsx'

import posts from '../data/posts.js'

function App() {

  return (
    <>
      <AlertProvider>
        <PostsContext.Provider value={{ posts }}>
          <BrowserRouter>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<PostsPage />} />
                <Route path='/posts/:id' element={<PostCard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PostsContext.Provider>
      </AlertProvider>

    </>
  )
}

export default App