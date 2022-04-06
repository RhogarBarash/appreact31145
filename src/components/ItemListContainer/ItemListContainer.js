import {useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock.js'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([])   

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    },[])

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ul>
                {products.map(product => <li>{product.name}</li>)}
            </ul>
        </div>
    )
}

export default ItemListContainer