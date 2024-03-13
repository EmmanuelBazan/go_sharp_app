import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from "react";
import { StackParamList } from "../../../navigation/splashStackNavigation/stackParamList";

type navigationType = StackNavigationProp<StackParamList,'splashScreen'>;

export default function SplashScreenController(navigation:navigationType) {

    useEffect(() => {
        setTimeout(() => {
            validateSession();
        }, 3000)
    }, []);
    
    async function validateSession() {
        navigation.navigate('loginScreen');
    }

    return {
        
    }
}