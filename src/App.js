import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import { Toaster } from 'react-hot-toast';
import Cart from './components/Cart/Cart';


function App() {

  return (

    <div className="min-h-screen">
      <Toaster position={`top-center`} />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact-us' element={<Contact />} />
        </Route>
        <Route path="*" element={<h1 className='text-9xl text-stone-500 font-bold text-center'>404 NOT-FOUND</h1>} />


      </Routes>


    </div>
  );
}

export default App;
