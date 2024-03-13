import { View,Text } from "react-native";
import { ProductModel } from "../../../../../domain/models/productModel";
import styles from "./productCardStyles";

type props = {
    product: ProductModel
}

function ProductCard({product}:props): JSX.Element {
    return (
        <View style={styles.mainContainer} >
            <Text style={styles.label} >{product.name}</Text>
            <Text style={styles.label} >{product.description}</Text>
        </View>
    )
}

export default ProductCard;