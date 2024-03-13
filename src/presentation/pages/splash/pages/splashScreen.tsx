import { Text, View } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';

import UseController from "../controllers/splashScreenController"
import { StackParamList } from "../../../navigation/splashStackNavigation/stackParamList";
import styles from "../styles/splashScreenStyle";

type navigationType = StackNavigationProp<StackParamList,'splashScreen'>;

type props = {
    navigation: navigationType
}

function SplashScreen({navigation}:props): JSX.Element {
    const {} = UseController(navigation);

    return(
        <View style={styles.mainContainer} >
            <Text style={styles.title} >Iniciando...</Text>
        </View>
    )
}

export default SplashScreen