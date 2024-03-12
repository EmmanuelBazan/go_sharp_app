import { View } from "react-native"

function Spacer({height = 0, width = 0}): JSX.Element {
    return (
        <View style={{height: height, width: width}} >
        </View>
    )
}

export default Spacer;