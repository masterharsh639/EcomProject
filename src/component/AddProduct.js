import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProduct() {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false)
    const navigate = useNavigate()

    const addProduct = async () => {
        // console.warn(name,price,category,company);
        if (!name && !price && !category && !company) {
            setError(true);
            return false
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/addproduct",
            {
                method: 'post',
                body: JSON.stringify({ name, price, category, company, userId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        result = await result.json();
        toast("Wow so easy!");

        navigate('/')
    }

    return (
        <><div className='addProductForm'>
            <h1>Add Product Form</h1>
            <input className='inputBox' placeholder='Enter Product Name' onChange={(e) => setName(e.target.value)} value={name} />
            {error && !name && <span className='error-field'> Enter Valid Name</span>}

            <input className='inputBox' placeholder='Enter Product Price' onChange={(e) => setPrice(e.target.value)} value={price} />
            {error && !price && <span className='error-field'> Enter Valid Price</span>}

            <input className='inputBox' placeholder='Enter Product Category' onChange={(e) => setCategory(e.target.value)} value={category} />
            {error && !category && <span className='error-field'> Enter Valid Category</span>}

            <input className='inputBox' placeholder='Enter Company' onChange={(e) => setCompany(e.target.value)} value={company} />
            {error && !company && <span className='error-field'> Enter Valid Company</span>}

            <button className='addButton' onClick={addProduct}>Add Product</button>
        </div><ToastContainer /></>
    )

}

export default AddProduct;