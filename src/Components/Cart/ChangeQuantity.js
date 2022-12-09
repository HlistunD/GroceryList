export const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity);
    }
    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }
    return(
        <div>
            <button className="btnRemove" onClick={removeQuantity}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="btnAdd" onClick={addQuantity}>+</button>
        </div>
    )
}