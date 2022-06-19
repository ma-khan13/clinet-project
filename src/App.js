import Footer from './components/include/Footer';
import Navbar from './components/include/Navbar';
import Topbar from './components/include/Topbar';
import '../src/assets/styles/Style.scss'
import Home from './components/Home/Home';
import BookingDetails from './components/Pages/BookingDetails/BookingDetails';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <BrowserRouter>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/single'} component={BookingDetails}/>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
}

export default App;
