import { useDispatch } from "react-redux";
import "../../App.css";
import { uiActions } from "../../store/ui-slice";
import CartButton from "../UI/CartButton";

const MaiHeader = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <>
      <CartButton />
    </>
  );
};

export default MaiHeader;
