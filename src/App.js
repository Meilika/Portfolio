import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MyProject from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MyProject />
      <Footer />
    </div>
  );
}

export default App;
