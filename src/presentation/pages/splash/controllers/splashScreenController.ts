import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { StackParamList } from "../../../navigation/splashStackNavigation/stackParamList";

type navigationType = StackNavigationProp<StackParamList,'splashScreen'>;

export default function SplashScreenController(navigation:navigationType) {
    const sessionState = useSelector((state: RootState) => state.session);

    useEffect(() => {
        setTimeout(() => {
            validateSession();
        }, 3000)
    }, []);
    
    async function validateSession() {
        if(sessionState.loggedIn) {
            navigation.navigate('homeTabNavigation');
        } else {
            navigation.navigate('loginScreen');
        }
    }

    return {
        
    }
}