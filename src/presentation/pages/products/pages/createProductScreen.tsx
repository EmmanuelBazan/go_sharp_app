import { View,Text, Button } from "react-native";
import CustomInput from "../../../components/customInput/customInput";
import Spacer from "../../../components/spacer/spacer";

import UseController from "../controllers/createProductScreenController"
import styles from "../styles/createProductScreenStyles";

function CreateProductScreen(): JSX.Element {
    const {
        createProduct,
        handleOnChangeInput,
        descriptionValue,
        nameValue,
    } = UseController();

    return(
        <View style={styles.mainContainer} >
            <Text style={styles.title} >Crear nuevo producto</Text>
            <Spacer height={30}/>
            <CustomInput 
                title="Nombre del producto" 
                placeholder="Escribe el nombre del producto" 
                onChange={handleOnChangeInput} 
                inputName="name"
                value={nameValue} />
            <Spacer height={10}/>
            <CustomInput 
                title="Descripcion del producto" 
                placeholder="Escribe la descripcion del producto" 
                onChange={handleOnChangeInput} 
                inputName="description"
                value={descriptionValue}/>
            <Spacer height={20}/>
            <Button title="Guardar" onPress={createProduct} />
        </View>
    )
}

export default CreateProductScreen