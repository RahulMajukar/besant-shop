import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])


    return (
        <div className='d-flex p-2 flex-wrap justify-content-around'>
            {
                products.map((product, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Img variant="top" src={product.image} style={{ height: "330px" }} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
        </div>
    )
}

export default ProductList