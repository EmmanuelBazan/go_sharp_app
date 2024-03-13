import { View,Text, Button } from "react-native";
import CustomInput from "../../../components/customInput/customInput";
import Spacer from "../../../components/spacer/spacer";
import styles from "../styles/loginStyles";
import UseController from "../controllers/loginScreenController"
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../navigation/splashStackNavigation/stackParamList";

type navigationType = StackNavigationProp<StackParamList,'splashScreen'>;

type props = {
    navigation: navigationType
}

function LoginScreen({navigation}:props): JSX.Element {
    
    const {
        login,
        handleOnChangeInput
    } = UseController(navigation);

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Iniciar sesion</Text>
            <CustomInput 
                title="Usuario" 
                placeholder="Escribe tu usuario" 
                onChange={handleOnChangeInput}
                inputName="user"
            />
            <Spacer height={20}/>
            <CustomInput 
                title="Contrasena" 
                placeholder="Escribe tu contrasena" 
                onChange={handleOnChangeInput} 
                isPassword={true}
                inputName="password"
            />
            <Spacer height={40}/>
            <Button title="entrar" onPress={login}/>
        </View>
    )
}

export default LoginScreen;