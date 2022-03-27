const ProductReducer = (state, action) => {
    if (action.type == "add") {
        let ProductObject = {
            product : action.product,
            price : action.price,
            brand : action.brand,
            available : action.available,
        }
        let newProducts = [...state, ProductObject];
        return newProducts
    }
}
export default ProductReducer;