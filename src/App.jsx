import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/Signup';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import NotFound from './Pages/404/Error'
import "tailwindcss";
export default function App() {

  return (
    <Router>


      {/* <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        </Route>
        <Route path="*" element={<div><h1>404 - Page Not Found</h1></div>} />
      </Routes> */}


      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

