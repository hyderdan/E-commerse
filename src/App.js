
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fit from './Components/Fit';
import {BrowserRouter,Route,Routes}from "react-router-dom"
import { useState } from 'react';
import mydata from './context';
import Store from './Components/Store';
import { img } from './Components/Data';
import Home from './Components/Home';
import { storeimage } from './Components/Data';
import Productdetails from './Components/Productdetails';

function App() {
  const[data,setdata]=useState(storeimage)
  const [storeimg,setstoreimg]=useState(img)
  const values={
    storeimg,setstoreimg,data,setdata
  }

  return (
    <div className="App">
      <BrowserRouter>
      <mydata.Provider value={values}>
      <Routes>
        <Route path='/Fit' element={<Fit/>}/>
        <Route path='/' element={<Store/>}/>
        <Route path='/workout' element={<Home/>}/>
        <Route path='/detail/:count' element={<Productdetails/>}/>
      </Routes>
      </mydata.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
