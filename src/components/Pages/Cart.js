import { useDispatch, useSelector } from "react-redux";
import ItemList from "../Restaurant/ItemList";
import { clearCart } from "../../utils/reduxStore/cartSlice";

const Cart = () => {
  /*
    we can also subscribe to the entire store like this
    const store = useSelector((store) => store);

    const cartItems = store.cart.items; 
    
    and then keep the cart.items from the store inside cartItems variable.
    But this is not suggested way, as the store will have multiple slices inside it, and whenever some slice is
    getting updated then this store will be updated here, so it's unneccessary burden here. 
    So that is why,, it is always suggested to subscribe to the smallest portion of the store, which is needed for that particulat task.
    like shown below
    
    */
  // Subscribing to the Store using useSelector - to get the whole store
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    // dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart </h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1> Your Cart is Empty! Please add items to the Cart</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
