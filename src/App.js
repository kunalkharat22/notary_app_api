import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table'
import { useEffect,useState } from 'react';
import Header from './components/Header'


function App() {

    return (
   <div className='app' style={{ fontFamily: "Montserrat"}}>
    <Navbar />
    <Header />
    <Table/>
   </div>
  );
}

export default App;
