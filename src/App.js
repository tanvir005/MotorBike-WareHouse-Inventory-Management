import logo from './logo.svg';
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






function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="services" element={<Services />} />
        <Route path="services" element={<DisplayService />} />
        <Route path="checkout" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path="service/:serviceName" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } /> */}
        <Route path="blogs" element={<Blogs />} />
        {/* <Route path="verificationsend" element={<VerificationSend />} /> */}
        {/* <Route path="about" element={<About />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="loading" element={<Loading />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="successPayment" element={
          <RequireAuth>
            <Payment />
          </RequireAuth> 
        } /> */}
        {/* <Route path="cart" element={<Cart />} /> */}
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
