import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logar, logout } from "../../redux/user/slice";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

function Header() {
  const carrinho = useSelector((state) => state.addCart.products);
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const dispatch=useDispatch()
  const logado=useSelector((state)=>state.user.logado)
  const qtdItens=useSelector(selectProductsCount)
  const handleCartClick = () => {
    setCartIsVisible(true);
  };
  console.log(logado)

  const handleLoginClick=()=>{
    dispatch(logar())
  }
  const handleLogoutClick=()=>{
    dispatch(logout())
  }
  

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {logado ? <div onClick={handleLogoutClick}>sair</div>:
         <div onClick={handleLoginClick}>Login</div>
        }
       
        <div onClick={handleCartClick}>Carrinho({qtdItens})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
