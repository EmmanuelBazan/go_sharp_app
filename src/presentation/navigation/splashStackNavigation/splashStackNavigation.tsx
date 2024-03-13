import { StackParamList } from './stackParamList';
import SplashScreen from '../../pages/splash/pages/splashScreen';
import LoginScreen from '../../pages/login/pages/login';
import SignUpScreen from '../../pages/signUp/pages/signUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabNavigation from '../homeTabNavigation/homeTabNavigation';

const Stack = createNativeStackNavigator<StackParamList>();

function SplashStackNavigation() {
    return (
        <Stack.Navigator initialRouteName='splashScreen'>
            <Stack.Screen 
                name="splashScreen" 
                component={SplashScreen} 
                options={{
                    headerShown: false,
                    orientation: 'portrait'
                }} />
            <Stack.Screen 
                name="loginScreen" 
                component={LoginScreen} 
                options={{
                    headerShown: false,
                    orientation: 'portrait'
                }} />
            <Stack.Screen 
                name="signUpScreen" 
                component={SignUpScreen} 
                options={{
                    headerShown: false,
                    orientation: 'portrait'
                }} />
            <Stack.Screen 
                name="homeTabNavigation" 
                component={HomeTabNavigation} 
                options={{
                    headerShown: false,
                    orientation: 'portrait'
                }} />
        </Stack.Navigator>
    );
}

export default SplashStackNavigation;