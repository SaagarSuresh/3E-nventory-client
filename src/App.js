import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import DeleteInventory from './components/DeleteInventory/DeleteInventory';
import AddNewItemPage from './pages/AddNewItemPage/AddNewItemPage';
import EditInventoryPage from './pages/EditInventoryPage/EditInventoryPage';
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/store/:id" element={<StorePage/>} />
      <Route path="/delete" element={<DeleteInventory/>} />
      <Route path="/newInventory/:id" element={<AddNewItemPage/>} />
      <Route path="/editInventory/:id" element={<EditInventoryPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
