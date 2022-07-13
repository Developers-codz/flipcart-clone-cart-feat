import './App.css';
import { Navbar } from './components';
import {Route,Routes} from "react-router-dom"
import { Cart, Products } from './pages';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path="/" element={<Products />} />
       <Route path="/cart" element={<Cart />} />
     </Routes>
    </div>
  );
}

export default App;
