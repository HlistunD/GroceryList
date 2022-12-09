import dataDishes from "../../Data/data";
import garbage from "./bin.png";

const CartItem = ({ cartItem }) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    return (
        <div>
            <p>{dishes.name}</p>
            <p>{cartItem.quantity} portion (s)</p>
            <p>Price: $ {dishes.price * cartItem.quantity}</p>
            <img className="icon" src={garbage} alt="garbage"/>
        </div>
    );
}
export default CartItem;