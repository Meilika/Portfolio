import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyProject from './pages/Projects';
import MyExperience from './pages/Experience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<MyExperience />} />
        <Route path="/myproject" element={<MyProject />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
