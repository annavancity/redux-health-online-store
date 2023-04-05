import { useDispatch } from 'react-redux';
import dataProducts from '../../data/dataProducts'
import { removeItemFromCart } from '../../redux/cartSlice';
import trash from "../../trash.png"

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const products = dataProducts.find(item => item.id === cartItem.productId)
    return(<div className='cart-item'>
        <p className='text-small'>{products.name}</p>
        <p className='text-small'>{cartItem.quantity} item(s)</p>
        <p className='text-small'>Price: ${products.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src={trash} alt="icon"/> 
        </span>
    </div>)
}

export default CartItem;