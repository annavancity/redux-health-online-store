import { useSelector } from "react-redux";
import dataProducts from "../../data/dataProducts";
import { getSelectedCategory } from "../../redux/productsSlice";
import Product from "./Product";

const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(<div>
        {dataProducts
        .filter(product => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === product.category;
        })
        .map(product => <Product product={product} key={product.id}/>)}
    </div>)
}

export default Products;