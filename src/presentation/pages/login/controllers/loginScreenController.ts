import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../navigation/splashStackNavigation/stackParamList";

type navigationType = StackNavigationProp<StackParamList,'splashScreen'>;

export default function LoginScreenController(navigation:navigationType) {

    function login() {
        navigation.navigate('homeTabNavigation');
    }

    return {
        login
    }
}