import { useSelector } from "react-redux";
import ProductItem from "../Shop/ProductItem";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{ border: "1px solid black", width: "50%", margin: "1rem 0" }}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
