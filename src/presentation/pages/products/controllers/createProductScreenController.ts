import { useState } from "react";
import { ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ProductModel } from "../../../../domain/models/productModel";
import { setNewProduct } from "../../../../redux/states/productListState";
import { setDescription, setName } from "../../../../redux/states/productState";
import { RootState } from "../../../../redux/store";

export default function CreateProductScreenController() {
    const productState = useSelector((state: RootState) => state.product);

    const[inputs,setInputs] = useState({
        name: "",
        description: ""
    });

    const dispatch = useDispatch();

    function handleOnChangeInput(value: string, input: string) {
        setInputs(prevState => ({...prevState, [input]: value}));
        switch(input) {
            case 'name':
                dispatch(setName(value))
                break;

            case 'description':
                dispatch(setDescription(value));
                break;
    
            default:
                break;
        }
    }
    
    function createProduct() {
        if(validateForm()) {
            let newProduct: ProductModel = {
                name: productState.name,
                description: productState.description
            }
    
            dispatch(setNewProduct(newProduct))

            cleanForm()

            ToastAndroid.show('Producto creado!!', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Llenar el formulario', ToastAndroid.SHORT);
        }
    }

    function cleanForm() {
        dispatch(setName(""))
        dispatch(setDescription(""))
        setInputs({
            name: "",
            description: ""
        })
    }

    function validateForm(): boolean {
        return productState.name.length > 0 && productState.description.length > 0;
    }

    return {
        createProduct,
        handleOnChangeInput,
        nameValue: inputs.name,
        descriptionValue: inputs.description,
    }
}