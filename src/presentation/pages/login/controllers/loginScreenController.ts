import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../../redux/states/session";
import { StackParamList } from "../../../navigation/splashStackNavigation/stackParamList";

type navigationType = StackNavigationProp<StackParamList,'splashScreen'>;

export default function LoginScreenController(navigation:navigationType) {

    const dispatch = useDispatch();

    function login() {
        dispatch(setLoggedIn(true));
        navigation.navigate('homeTabNavigation');
    }

    return {
        login
    }
}