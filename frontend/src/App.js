
import './App.css';
// import Main from './admin/main/Main';
import { Route, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import Men from './component/Men/Men';
import Women from './component/Women/Women';


function App() {
  return (
    <>
      {/* <Main/>  admin use*/}
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path='/women' element={ <Women />} />
      </Routes>
    </>
  );
}

export default App;
