import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items); 
    
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    
    return( 
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-green-500 text-black font-bold rounded-lg"
        onClick = {handleClearCart}
        >
            Clear Cart
        </button>
        {cartItems.length === 0 && <h1 className="font-bold text-2xl text-red-900">Cart is empty .. Add Items to the Cart..👩‍🍳</h1>}
            <ItemList items={cartItems} />
        </div>
     </div>
     );
};
export default Cart; 