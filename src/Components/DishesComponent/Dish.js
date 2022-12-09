const Dish = ({dish}) => {
    return(
        <div className="container">
            <img src={`./${dish.img}.jpg`} alt="dishes"/>
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>

            <button>HOW MANY PORTIONS?</button>
            <button>ADD TO CART</button>
        </div>
    )
}
export default Dish;