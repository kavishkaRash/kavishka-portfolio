import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LuxGlowProjectPage from './pages/LuxGlowProjectPage'
import CICDJenkinsCaseStudy from './pages/CICDJenkinsCaseStudy'
import CICDGithubActionsCaseStudy from './pages/CICDGithubActionsCaseStudy'
import CheckmateCaseStudy from './pages/CheckmateCaseStudy'
import VelvetVogueCaseStudy from './pages/VelvetVogueCaseStudy'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/project-detail" element={<LuxGlowProjectPage />}/>
        <Route path="/velvet-vogue" element={<VelvetVogueCaseStudy />}/>
        <Route path="/checkmate" element={<CheckmateCaseStudy />}/>
        <Route path="/cicd-jenkins" element={<CICDJenkinsCaseStudy />}/>
        <Route path="/cicd-github-actions" element={<CICDGithubActionsCaseStudy />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App