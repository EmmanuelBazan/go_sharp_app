import { StyleSheet, Dimensions } from "react-native";

const WIDTH_SCREEN = Dimensions.get('screen').width
const HEIGTH_SCREEN = Dimensions.get('screen').height

const styles = StyleSheet.create({
    mainContainer: {
        width: WIDTH_SCREEN,
        height: HEIGTH_SCREEN,
        paddingHorizontal: 22,
    },
    title: {
        fontSize: 20, 
        width: '100%', 
        textAlign: 'center',
        fontWeight: '700',
    }
});

export default styles;