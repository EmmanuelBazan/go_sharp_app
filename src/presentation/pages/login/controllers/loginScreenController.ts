import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { ToastAndroid } from "react-native";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../../redux/states/session";
import { StackParamList } from "../../../navigation/splashStackNavigation/stackParamList";

type navigationType = StackNavigationProp<StackParamList,'splashScreen'>;

export default function LoginScreenController(navigation:navigationType) {
    const[inputs,setInputs] = useState({
        user: "",
        password: ""
    });

    const dispatch = useDispatch();

    function handleOnChangeInput(value: string, input: string) {
        setInputs(prevState => ({...prevState, [input]: value}));
    }

    function login() {
        if(validateForm()) {
            dispatch(setLoggedIn(true));
            navigation.navigate('homeTabNavigation');
        } else {
            ToastAndroid.show('Llenar el formulario', ToastAndroid.SHORT);
        }
    }

    function validateForm(): boolean {
        return inputs.user.length > 0 && inputs.password.length > 0;
    }

    return {
        login,
        handleOnChangeInput
    }
}