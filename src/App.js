import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Signin from './Pages/Signin';
import Contacts from './Pages/Contacts';
import About from './Pages/About';

function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/about" element={<About />}/>
       </Routes>
   </Router>
  );
}

export default App;
