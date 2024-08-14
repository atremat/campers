import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { FavoritePage } from './pages/FavoritesPage/FavoritesPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
