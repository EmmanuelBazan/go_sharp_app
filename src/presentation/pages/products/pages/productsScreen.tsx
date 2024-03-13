import { Text, View, FlatList } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ProductModel } from "../../../../domain/models/productModel";
import Spacer from "../../../components/spacer/spacer";
import UseController from "../controllers/productsScreenController"

function ProductsScreen(): JSX.Element {
    const {productList} = UseController();

    return(
        <View style={{paddingHorizontal: 22}} >
            <Text style={{fontSize: 18, fontWeight: '700'}} >Productos</Text>
            <Spacer height={30}/>
            <FlatList
                data={productList}
                style={{paddingTop: 0, width: '100%'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                    let currentProduct:ProductModel = item.item;
                    return (
                        <View style={{backgroundColor: "#f2f2f2", borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5}} >
                            <Text style={{color: Colors.darker}} >{currentProduct.name}</Text>
                            <Text style={{color: Colors.darker}} >{currentProduct.description}</Text>
                        </View>
                    )
                }}
                ItemSeparatorComponent={() => <Spacer height={20} />}
                ListFooterComponent={() => <Spacer height={150} />}
            />
        </View>
    )
}

export default ProductsScreen