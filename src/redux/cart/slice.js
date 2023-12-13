import { createSlice } from "@reduxjs/toolkit"

const initialState={
    products:[],
    valorTotal:0
}

const cartSlice =createSlice({
    name:'addCart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const produtoExistente=state.products.find((product)=>product.id ===action.payload.id)
            if(produtoExistente){
                produtoExistente.quantity +=1
            }else{
                state.products.push({...action.payload,quantity:1})
            }
            
        },
      
        removeToCart: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id);
            
          },
          removeFromCart: (state, action) => {
            const existingProduct = state.products.find((product) => product.id === action.payload.id);
          
            if (existingProduct) {
              if (existingProduct.quantity > 1) {
                // Se a quantidade for maior que 1, apenas diminui a quantidade
                existingProduct.quantity -= 1;
              } else {
                // Se a quantidade for 1 ou menos, remove completamente o produto
                state.products = state.products.filter((product) => product.id !== action.payload.id);
              }
            }
            
          }
          
          
    }
})

export const {addToCart,removeToCart,removeFromCart,getTotalItems}=cartSlice.actions
export const selectCart = (state) => state.addCart.products;
export default cartSlice.reducer