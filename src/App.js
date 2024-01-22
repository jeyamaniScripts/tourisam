import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Layouts from './pages/Layouts'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import NoPages from './pages/NoPages'
const App = () => {
  return (
   <>
      <Routes>
        <Route path="/" element={<Layouts/> }>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="blogs" element={<Blogs/>} />
          <Route path="*" element={<NoPages />} />
          
        </Route>
      </Routes>
   </>
  )
}

export default App