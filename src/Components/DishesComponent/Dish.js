import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redax/CartSlice";
import { ChangeQuantity } from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div className="container">
            <img src={`./${dish.img}.jpg`} alt="dishes"/>
            <h2>{dish.name}</h2>
            <span className="price">$ {dish.price}</span>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="addToCartBtn" onClick={() => dispatch(addItemToCart({dish, quantity}))}>ADD TO CART</button>
        </div>
        )
    }

export default Dish;