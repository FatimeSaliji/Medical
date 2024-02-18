import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Home from "./pages/Home"
import Doctors from "./pages/Doctors"
import Services from "./pages/Services"
import Login from "./pages/Login"
import Logiin from "./pages/Logiin"
import Register from "./pages/Register"





function App() {
  return (
    <>
    
    
   <BrowserRouter>
   <Header/>
  
   
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
       
        <Route path="/doctors" element={<Doctors />}/>
        
        <Route path="/services" element={<Services />}/>
        
        <Route path="/login" element={<Login />}/>
        <Route path="/logiin" element={<Logiin/>}/>
        <Route path="/register" element={<Register/>}/>
        
      </Routes>
      </div>
      
     
      <Footer/>

  </BrowserRouter> 
   
   </>
  );
}

export default App;
