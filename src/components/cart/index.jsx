// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item";
import { totalPriceProducts } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const carrinho = useSelector((state) => state.addCart.products);
  const total = useSelector(totalPriceProducts)
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
 {carrinho.map((product)=>(
  <CartItem product={product}/>
 ))}
   <p>Valor total:R${total}</p>
      </Styles.CartContent>
    
    </Styles.CartContainer>
  );
};

export default Cart;
