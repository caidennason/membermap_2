import react from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/NavBar'
import Login from "./pages/Login"
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import StatesMap from './pages/StatesMap'

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
              <Home />
            // </ProtectedRoute>
          }
        />
        {/* <Route path="/login"element={<Login /> }/>
        <Route path="/logout"element={<Logout /> }/> */}
        {/* <Route path="/register"element={<RegisterAndLogout /> }/> */}
        <Route path="*" element={<NotFound />}/>
        <Route path="/statesmap" element={<StatesMap/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
