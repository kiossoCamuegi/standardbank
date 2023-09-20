import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Signin from './Pages/Signin';
import Contacts from './Pages/Contacts'; 
import Sb_signin from './Pages/SB24/Sb_signin';
import Sb_dashboard from './Pages/SB24/Sb_dashboard';
import CarrerHome from './Pages/Carrers/CarrerHome';
import CarrerSearch from './Pages/Carrers/CarrerSearch';
import CarrerJobDetails from './Pages/Carrers/CarrerJobDetails';
import About from './Pages/AboutPage/About';

function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/sb24_signin" element={<Sb_signin />}/>
          <Route path="/carrers" element={<CarrerHome />}/>
          <Route path="/sb24_dashboard" element={<Sb_dashboard />} />
          <Route path="/carrersearch" element={<CarrerSearch />} />
          <Route path="/carrerjobdetails" element={<CarrerJobDetails />} />
       </Routes>
   </Router>
  );
}

export default App;
