import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Signin from './Pages/Signin';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Sb_signin from './Pages/SB24/Sb_signin';
import Sb_dashboard from './Pages/SB24/Sb_dashboard';

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
          <Route path="/sb24_dashboard" element={<Sb_dashboard />} />
       </Routes>
   </Router>
  );
}

export default App;
