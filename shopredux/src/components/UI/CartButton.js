import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  //   const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <>
      <button className="headerButton" onClick={toggleHandler}>
        <span>My Cart</span>
        <span className="button-counter">{cartQuantity}</span>
      </button>
    </>
  );
};
export default CartButton;
