import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#f2f2f2", 
        borderRadius: 5, 
        paddingHorizontal: 10, 
        paddingVertical: 5
    },
    label: {
        color: Colors.darker
    }
});

export default styles;