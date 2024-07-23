import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './pages/SideBar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
