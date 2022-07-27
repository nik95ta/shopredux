import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, id } = props;
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
      })
    );
  };

  return (
    <>
      <div style={{ border: "1px solid black", width: "50%", margin: "1rem" }}>
        <h2>{title}</h2>
        <ul>
          <li>${price}</li>
          <li>book</li>
          <li>book</li>
        </ul>
        <button onClick={addToCartHandler}>Add to Cart</button>
        {/* <button onClick={AddCartHandler}>Add to Cart</button> */}
      </div>
    </>
  );
};

export default ProductItem;
