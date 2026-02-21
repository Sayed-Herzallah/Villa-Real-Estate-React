import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SubNav from './Components/SubNav';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loader from './Components/Loder';
import ScrollToTop from './Components/Scroll';
import Home from './Pages/Home';
import Properties from './Pages/Properties';
import Contact from './Pages/Contact';
import PropertyDetails from './Pages/PropertyDetails';
import Products from './Products/Products';
import Cart from './Pages/Cart';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Loader />
      <SubNav />
      <Navbar />
      <Routes>
        <Route path="/"                 element={<Home />}            />
        <Route path="/properties"       element={<Properties />}      />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/contact"          element={<Contact />}        
        />
<Route path="/products" element={<Products />} />
<Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;