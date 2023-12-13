import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/slice";

// Utilities

const ProductItem = ({ product }) => {

  const dispatch=useDispatch()

  const carrinho = useSelector((state) => state.addCart.products);
  console.log(carrinho)
 



  const handleAddToCart=()=>{
    dispatch(addToCart(product))
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage  onClick={handleAddToCart} imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
