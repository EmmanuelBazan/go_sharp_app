import { StackParamList } from './stackParamList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductsScreen from '../../pages/products/pages/productsScreen';
import CreateProductScreen from '../../pages/products/pages/createProductScreen';
import ProfileScreen from '../../pages/profile/pages/profileScreen';

const Tab = createBottomTabNavigator<StackParamList>();

function HomeTabNavigation() {
    return (
        <Tab.Navigator initialRouteName='productsScreen' safeAreaInsets={{bottom: 10}}  >
            <Tab.Screen 
                name="productsScreen" 
                component={ProductsScreen} 
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen 
                name="createProductScreen" 
                component={CreateProductScreen} 
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen 
                name="profileScreen" 
                component={ProfileScreen} 
                options={{
                    headerShown: false,
                }} />
        </Tab.Navigator>
    );
}

export default HomeTabNavigation;