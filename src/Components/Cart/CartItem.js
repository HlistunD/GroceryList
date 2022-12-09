import dataDishes from "../../Data/data";
import garbage from "./bin.png";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Redax/CartSlice";

const CartItem = ({ cartItem }) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{dishes.name}</p>
            <p>{cartItem.quantity} portion (s)</p>
            <p>Price: $ {dishes.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId:  cartItem.id}))}>
            <img className="icon" src={garbage} alt="garbage"/>
            </span>
        </div>
    );
}
export default CartItem;