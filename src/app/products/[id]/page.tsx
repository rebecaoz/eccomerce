const DetailProduct = ({ params }) =>{
    return(
        <div>
             <h1>Producto ID: {params.id}</h1>
             <p>Detalles del producto {params.id}</p>
        </div>
        
    )
}
export default DetailProduct;