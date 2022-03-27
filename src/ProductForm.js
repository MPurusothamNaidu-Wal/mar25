import { useState,useReducer,useContext } from "react";
import ProductContext from "./ProductContext";
const ProductForm = () => {
    let [product, setProducts] = useState("");
    let [price, setPrice] = useState("");
    let[brand, setBrand] = useState("");
    let {dispatch} = useContext(ProductContext);
    let[available, setAvailable] = useState("available");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const AddProduct = () => {
        dispatch({type:"add", product:product, price:price, brand:brand, available:available })
    }
    return( 
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type="name" name="name" placeholder="name" onInput={
                (e) =>{
                    setProducts(e.target.value);
                }
            } />
            <input 
            type="number" name="price" placeholder="price" onInput={
                (e) =>{
                    setPrice(e.target.value);
                }
            } />
            <input
            type="name" name="brand" placeholder="brand" onInput={
                (e) =>{
                    setBrand(e.target.value);
                }
            } />
            <input type="radio" name="available" value="available" onClick={(e) =>{
                setAvailable(e.target.value)
            }} />
            <label htmlFor="available">available</label>
            <input type="radio" name="navailable" value="not available" onClick={(e) =>{
                setAvailable(e.target.value)
            }} />
            <label htmlFor="navailable">not available</label><br />
                <button onClick={AddProduct}>Add Product</button><br />
            </form>
        </div>
    )
}
export default ProductForm;