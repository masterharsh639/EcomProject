// import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav'
import {BrowserRouter , Routes,Route , Link} from 'react-router-dom'
import Home from './component/Home'
import Aboutus from './component/Aboutus'
import Page404 from './component/Page404';
import UpdateProduct from './component/UpdateProduct';
import Profile from './component/Profile';
import Footer from './component/Footer';
import Header from './component/Header'
import Signup from './component/Signup'
import PrivateComponent from './component/PrivateComponent'
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
          <Route element={<PrivateComponent/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/updateproduct/:id" element={<UpdateProduct/>}/>
          <Route path="/*" element={<Page404/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/addproduct/:id" element={<AddProduct/>}/>
          <Route path="/productlist" element={<ProductList/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
