
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import ProductDetail from './pages/ProductDetail';
import ArtistJoin from './pages/ArtistJoin';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/artist/join" element={<ArtistJoin />} />
        <Route path="/admin" element={<Admin />} />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
