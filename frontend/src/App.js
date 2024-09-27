
import './App.css';
// import Main from './admin/main/Main';
import { Route, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import Men from './component/Men/Men';
import Women from './component/Women/Women';
import Cart from './component/cart/Cart'
import About from './component/about/About'
import Contact from './component/contact/Contact';
import Registration from './component/user/Registration';
import Login from './component/user/Login';



function App() {
  return (
    <>
      {/* <Main/>  admin use*/}
    
      
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/' element={<Login />} />



      </Routes>
    </>
  );
}

export default App;
