
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LuxGlowProjectPage from './pages/LuxGlowProjectPage'


const App = () => {
  return(
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<HomePage />}/>
        <Route path="/project-detail" element={<LuxGlowProjectPage />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
