import { StyleSheet } from "react-native";

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%', 
        height: '100%', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darker
    },
    title: {
        fontSize: 20, 
        fontWeight: '700'
    }
});

export default styles;