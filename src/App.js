import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import PageBar from './components/PageBar/PageBar';
import StorePage from './pages/StorePage/StorePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/store" element={<StorePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
