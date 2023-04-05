import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Product = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(<div className="item-card">
        <img src={`${product.image}.jpg`} alt="product"/>
        <h3>{product.name}</h3>
        <h3>$ {product.price}</h3>
        < ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <button className="btn-add" onClick={() => {dispatch(addItemToCart({product, quantity}))}}>Add to cart</button>
    </div>)
}

export default Product;