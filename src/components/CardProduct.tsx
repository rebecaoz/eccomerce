import { ProductModel } from "@/models/product";

interface CardProductProps{
    product: ProductModel;
}

const CardProduct = ({product} : CardProductProps) =>{
    return(
        <div>
            <h2>{product.name}</h2>
            <b>{product.price}</b>
        </div>
    );
};
export default CardProduct;