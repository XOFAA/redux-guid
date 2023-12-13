export const selectProductsCount =(rootReducer)=>{
    return rootReducer.addCart.products.reduce((acc,curr)=>acc+curr.quantity,0
    );

}

export const totalPriceProducts =(rootReducer)=>{
    return rootReducer.addCart.products.reduce((acc,curr)=>acc+curr.price *curr.quantity,0
    );

}