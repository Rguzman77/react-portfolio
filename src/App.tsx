import './App.css'
import { Route, Routes } from 'react-router-dom'
import { About,Contact,Home,NotFound,Projects,Skills, Layout } from './pages/index'

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
