import Footer from './components/include/Footer';
import Navbar from './components/include/Navbar';
import Topbar from './components/include/Topbar';
import '../src/assets/styles/Style.css'
import Home from './components/Home/Home';
function App() {
  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
