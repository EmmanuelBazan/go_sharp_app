import { Text, View, FlatList } from "react-native";
import { ProductModel } from "../../../../domain/models/productModel";
import Spacer from "../../../components/spacer/spacer";
import ProductCard from "../components/productCard/productCard";
import UseController from "../controllers/productsScreenController"
import styles from "../styles/productsScreentStyles";

function ProductsScreen(): JSX.Element {
    const {productList} = UseController();

    return(
        <View style={styles.mainContainer} >
            <Text style={styles.title} >Productos</Text>
            <Spacer height={30}/>
            <FlatList
                data={productList}
                style={styles.flatListStyle}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                    let currentProduct:ProductModel = item.item;
                    return (
                        <ProductCard product={currentProduct}/>
                    )
                }}
                ItemSeparatorComponent={() => <Spacer height={20} />}
                ListFooterComponent={() => <Spacer height={150} />}
            />
        </View>
    )
}

export default ProductsScreen