import './App.css';
import RequireAuth from '../src/pages/RequireAuth/RequireAuth';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Shared/Home/Home';
import Header from './pages/Shared/Header/Header';
import Blogs from './pages/Blogs/Blogs';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login/Login';
import Loading from './pages/Shared/Loading/Loading';
import Register from './pages/Login/Register/Register';
import FourOFour from './pages/Shared/FourOFour/FourOFour';
import AddItems from './Items/AddItems/AddItems';
import InventoryItems from './Items/InventoryItems/InventoryItems';
import DisplayInventoryItem from './Items/DisplayInventoryItem/DisplayInventoryItem';
import { ToastContainer } from 'react-toastify';
import ManageItems from './Items/ManageItems/ManageItems';
import ManageInventory from './Items/ManageInventory/ManageInventory';
import MyItems from './Items/MyItems/MyItems';






function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inventory" element={<InventoryItems />} />

        <Route path="inventory/:id" element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        } />
        <Route path="manageinventory" element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } />
        <Route path="additem" element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        } />
        <Route path="myitems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        } />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="loading" element={<Loading />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
