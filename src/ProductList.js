import { useContext } from "react";
import ProductContext from "./ProductContext";
import useLocalStorage from "use-local-storage";
const ProductList = () => {
    let [result, setResult] = useLocalStorage("Product");
    let value = useContext(ProductContext);    
    let ProductObject = {
        product : value.product,
        price : value.price,
        brand : value.brand,
        available : value.available,
    }
    
    let values = value.state;
    console.log(values);
    if(ProductObject.product != undefined){
        let newProducts = [values,ProductObject];
        console.log(newProducts);
        setResult(newProducts);
    }
    return(
        <div>
            {
                value.state.map((val, index) => {
                    return (
                        <div>
                            <h3>{val.product}</h3>
                            <h4>{val.price}</h4>
                            <h4>{val.brand}</h4>
                            <h4>{val.available}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;