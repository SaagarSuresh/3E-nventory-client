import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/store" element={<StorePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
