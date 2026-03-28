import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Welcome from './App.jsx'
import User from './App.jsx'
import Keerthi from './Keerthi.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Welcome /> */}
    {/* <User /> */}
    <Keerthi name="Keerthi Kumar" />
<Keerthi name="Frontend Dev" />
<Keerthi name="React Learner" />
  </StrictMode>,
)
