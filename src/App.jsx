import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceDetail from "./components/ServiceDetail";
import Footer from './components/Footer';
import Contact from './pages/Contactus';
import Bimservices from './pages/Bimservices';


function App() {
  

  return (
    <>
   
      <Router>

     <Topbar/>
     <ScrollToTop/>
     <Navbar/>
     <Routes>
        <Route index element={<Home/>}/>
      
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Bimservices/>}/>
        <Route
      path="/services/:service/:slug"
      element={<ServiceDetail />}
    />
      </Routes>
      <Footer/>
     </Router>
     
    </>
  )
}

export default App
