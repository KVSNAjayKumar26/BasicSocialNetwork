import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './components/Profile'
import CreatePost from './components/CreatePost'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <><GlobalStyles /><Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router></>
  );
};

export default App;