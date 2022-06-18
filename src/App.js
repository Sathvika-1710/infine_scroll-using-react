import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PrivateRoute from './Components/PrivateRoute'
import {Profile} from './Components/Profile'
import { Login } from './Components/Login';
import {List} from './Components/List'
import {useState} from 'react'


function App() {
  const [auth,setauth]=useState(null)
  const login=()=>{
    setauth(true)
  }
  const logout=()=>{
    setauth(false)
  };
  
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Login login={login}/>}/>
            <Route element={<PrivateRoute auth={auth} />}>
                <Route element={<List logout={logout}/>} path="/home" exact/>
               
            </Route>
           
          </Routes>
      </Router>
    </div>
  );
}

export default App;