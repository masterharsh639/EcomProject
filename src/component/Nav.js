import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    // <div>
    //        { auth ? <ul className="nav-ul li">
    //       <li><Link to="/productlist">Products</Link></li>
    //       <li><Link to="/addproduct">Add Product</Link></li>
    //       <li><Link to="/updateproduct">Update Product</Link></li>
    //       <li><Link to="/profile">Profile</Link></li>
    //       <li><Link onClick={logout} to="/logout">Logout {JSON.parse(auth).name}</Link></li>
    //       </ul> : <ul className="nav-ul nav-right">
    //       <li><Link to="/signup">Signup</Link></li>
    //       <li><Link to="/login">Login</Link></li>
    //   </ul>
    // }
    // </div >
    <div>
      {<ul className="nav-ul li">
        <li><Link to="/productlist">Products List</Link></li>
        <li><Link to="/addproduct">Add Product</Link></li>
        <li><Link to="/updateproduct">Update Product</Link></li>
        <li><Link to="/profile">Profile</Link></li> </ul>
      }  </div>
  )
}

export default Nav;