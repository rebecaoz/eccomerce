'use client'
import Link from 'next/link';
import { useState } from 'react';
import {ProductModel} from '../../models/product';
import CardProduct from '../../components/CardProduct';

const Products = () =>{

    let list: ProductModel[] = [
        {
            id: 1,
            name: "shoes",
            price: 9999
        },
        {
            id: 2,
            name: "socks",
            price: 99
        },
        {
            id: 3,
            name: "boots",
            price: 12999
        }

    ]
    const [products, setProducts] = useState<ProductModel[]>(list);

    return(
        <div>
            <h1>Lista de Productos</h1>
        
            {products.map((element, index)=>{
                return(
                    <CardProduct product={element}/>
                )
            })

            }
            <Link href="/">
                Ir a la Home
            </Link>
            
                
            
        </div>
    )
}
export default Products;