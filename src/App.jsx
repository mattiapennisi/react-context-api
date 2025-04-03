import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PostsContext from './contexts/PostsContext.jsx'

function App() {

  return (
    <>
      <PostsContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PostsContext>
    </>
  )
}

export default App