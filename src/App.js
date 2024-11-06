import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/User/Login'
import Notifications from './components/Notifications';
import Loading from './components/Loading'

const App = () => {
  return (

  <>
  <Loading/>
  <Notifications/>
  <Login/>
  <Navbar/> 
  </>
  );

};

export default App
