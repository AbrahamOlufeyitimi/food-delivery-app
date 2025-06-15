import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<WelcomePage/>} /> */}
        <Route path="/" element={<AuthPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
