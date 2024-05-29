import { useSelector } from "react-redux";

const Cart = () => {
  // Subscribing to the Store using useSelector - to get the whole store
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart </h1>
    </div>
  );
};
export default Cart;
