import { View,Text, Button } from "react-native";
import CustomInput from "../../../components/customInput/customInput";
import Spacer from "../../../components/spacer/spacer";
import styles from "../styles/loginStyles";

function LoginScreen(): JSX.Element {
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Iniciar sesion</Text>
            <CustomInput 
                title="Usuario" 
                placeholder="Escribe tu usuario" 
                onChange={() => {}}
            />
            <Spacer height={20}/>
            <CustomInput 
                title="Contrasena" 
                placeholder="Escribe tu contrasena" 
                onChange={() => {}} 
                isPassword={true}
            />
            <Spacer height={40}/>
            <Button title="entrar"/>
        </View>
    )
}

export default LoginScreen;