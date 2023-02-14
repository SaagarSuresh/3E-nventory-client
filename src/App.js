import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import AddNewItemPage from './pages/AddNewItemPage/AddNewItemPage';
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/store/:id" element={<StorePage/>} />
      <Route path="/newInventory/:id" element={<AddNewItemPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
