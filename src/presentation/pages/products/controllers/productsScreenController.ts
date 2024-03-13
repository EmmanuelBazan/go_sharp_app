import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"

export default function ProductsScreenController() {
    const productListState = useSelector((state: RootState) => state.productList);
    
    return{
        productList: productListState.products
    }
}