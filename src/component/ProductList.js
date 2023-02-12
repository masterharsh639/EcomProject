import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProduct] = React.useState([])

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        let result = await fetch('http://localhost:5000/productlist');
        result = await result.json();
        setProduct(result);
        console.log(result);
    }

    const deleteProduct = async (id) => {
        let result = fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete",
        })
        result = await result.json()
        if (result) {
            alert("record is deleted")
            getProduct();
        }
    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setProduct(result)
            }
        }
        else {
            getProduct();
        }
    }

    return (
        <div className='product-list'>
            <h1>
                ProductList
            </h1>
            <input className='searchBox' placeholder='Search Box' onChange={searchHandle} />
            <ul>
                <li>S.NO </li>
                <li>NAME </li>
                <li>PRICE </li>
                <li>CATEGORY </li>
                <li>ACTION</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>delete</button></li>
                        <li><Link to={"/updateproduct/" + item._id}>update</Link></li>
                    </ul>
                )
            }
        </div>
    )
}

export default ProductList