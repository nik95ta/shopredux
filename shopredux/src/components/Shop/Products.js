import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
import ProductItem from "./ProductItem";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
];
const Products = (props) => {
  return (
    <>
      {DUMMY_PRODUCTS.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </>
  );
};

export default Products;
