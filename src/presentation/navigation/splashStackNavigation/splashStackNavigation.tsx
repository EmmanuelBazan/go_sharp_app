import { StackParamList } from './stackParamList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../../pages/splash/pages/splashScreen';
import LoginScreen from '../../pages/login/pages/login';
import SignUpScreen from '../../pages/signUp/pages/signUpScreen';

const Tab = createBottomTabNavigator<StackParamList>();

function HomeTabNavigation() {
    return (
        <Tab.Navigator initialRouteName='splashScreen' safeAreaInsets={{bottom: 10}}  >
            <Tab.Screen 
                name="splashScreen" 
                component={SplashScreen} 
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen 
                name="loginScreen" 
                component={LoginScreen} 
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen 
                name="signUpScreen" 
                component={SignUpScreen} 
                options={{
                    headerShown: false,
                }} />
        </Tab.Navigator>
    );
}

export default HomeTabNavigation;