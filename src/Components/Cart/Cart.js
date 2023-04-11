import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import cartIcon from "../../shopping_cart.png"

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return(<div>
        <img className="cartIcon" src={cartIcon} alt="cart"/> 
        <h3 className="text-attention">Total: ${totalPrice}</h3>
    {cartItems.map(cartItem => < CartItem cartItem={cartItem} key={cartItem.id}/>)}
    </div>)
}

export default Cart;