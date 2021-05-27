import React from 'react'
import Container from 'react-bootstrap/Container'
import './Pages/App.css'
import Header from './componets/Header'
import Login from './Pages/Login'
import Footer from './componets/Footer'

function App() {
  return (
    <Container className="app">
      
      
      
  <Header/>
  <Login/>
  <Footer/>
      
      
    </Container>
    );
}

export default App;
