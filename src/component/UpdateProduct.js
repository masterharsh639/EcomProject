import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        console.log(result);
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () => {
        console.log(name, price, category, company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        result = await result.json();
    }
    
    return (
        <div className='addProductForm'>
            <h1>Update Product Form</h1>

            <input className='inputBox' type="text" placeholder='Enter Product Name' onChange={(e) => setName(e.target.value)} value={name} />

            <input className='inputBox' type="text" placeholder='Enter Product Price' onChange={(e) => setPrice(e.target.value)} value={price} />

            <input className='inputBox' type="text" placeholder='Enter Product Category' onChange={(e) => setCategory(e.target.value)} value={category} />


            <input className='inputBox' type="text" placeholder='Enter Company' onChange={(e) => setCompany(e.target.value)} value={company} />

            <button className='addButton' onClick={updateProduct}>Update Product</button>
        </div>
    )

}

export default UpdateProduct;