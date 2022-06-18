import Footer from './components/include/Footer';
import Navbar from './components/include/Navbar';
import Topbar from './components/include/Topbar';
import '../src/assets/styles/Style.scss'
import Home from './components/Home/Home';
import BookingDetails from './components/Pages/BookingDetails/BookingDetails';
function App() {
  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <BookingDetails></BookingDetails>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
