import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux"
import { setLoggedIn } from "../../../../redux/states/session";
import { StackParamList } from "../../../navigation/homeTabNavigation/stackParamList";

type navigationType = StackNavigationProp<StackParamList,'profileScreen'>;

export default function ProfileScreenController(navigation:navigationType) {
    const dispatch = useDispatch();

    function logOut() {
        dispatch(setLoggedIn(false))
        navigation.navigate('loginScreen');
    }

    return {
        logOut
    }
}