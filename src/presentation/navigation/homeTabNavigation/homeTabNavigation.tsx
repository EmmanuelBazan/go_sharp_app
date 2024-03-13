import { StackParamList } from './stackParamList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductsScreen from '../../pages/products/pages/productsScreen';
import CreateProductScreen from '../../pages/products/pages/createProductScreen';
import ProfileScreen from '../../pages/profile/pages/profileScreen';
import { View,Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator<StackParamList>();

function HomeTabNavigation() {
    return (
        <Tab.Navigator initialRouteName='productsScreen' safeAreaInsets={{bottom: 10}} sceneContainerStyle={{backgroundColor: Colors.darker}}  >
            <Tab.Screen 
                name="productsScreen" 
                component={ProductsScreen} 
                options={{
                    headerShown: false,
                    tabBarLabel: ({color,focused}) => (<Text style={{color: color, fontSize: 12, fontWeight: '700'}}>Productos</Text>),
                    tabBarIcon: ({color,focused,size}) => (
                        <View></View>
                    )
                }} />
            <Tab.Screen 
                name="createProductScreen" 
                component={CreateProductScreen} 
                options={{
                    headerShown: false,
                    tabBarLabel: ({color,focused}) => (<Text style={{color: color, fontSize: 12, fontWeight: '700'}}>Crear</Text>),
                    tabBarIcon: ({color,focused,size}) => (
                        <View></View>
                    )
                }} />
            <Tab.Screen 
                name="profileScreen" 
                component={ProfileScreen} 
                options={{
                    headerShown: false,
                    tabBarLabel: ({color,focused}) => (<Text style={{color: color, fontSize: 12, fontWeight: '700'}}>Perfil</Text>),
                    tabBarIcon: ({color,focused,size}) => (
                        <View></View>
                    )
                }} />
        </Tab.Navigator>
    );
}

export default HomeTabNavigation;