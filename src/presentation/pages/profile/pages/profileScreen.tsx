import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import Spacer from "../../../components/spacer/spacer";
import { StackParamList } from "../../../navigation/homeTabNavigation/stackParamList";

import UseController from "../controllers/profileScreenController"
import styles from "../styles/profileStyles";

type navigationType = StackNavigationProp<StackParamList,'profileScreen'>;

type props = {
    navigation: navigationType
}

function ProfileScreen({navigation}:props): JSX.Element {
    const {logOut} = UseController(navigation);

    return(
        <View style={styles.mainContainer} >
            <Text style={styles.title}>Perfil</Text>
            <Spacer height={30}/>
            <Button title="Cerrar sesion" onPress={logOut}/>
        </View>
    )
}

export default ProfileScreen