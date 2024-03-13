import React from "react";
import { KeyboardTypeOptions } from "react-native";
import { Text, TextInput, View } from "react-native"
import Spacer from "../spacer/spacer";

type props = {
    isOk?: boolean
    title: string 
    value?: string
    placeholder: string,
    inputName: string,
    onChange: (value:string, input:string) => void,
    isPassword?: boolean,
    keyBoardType?: KeyboardTypeOptions
}

const CustomInput = ({
    isOk,
    onChange,
    placeholder,
    title,
    value,
    inputName,
    keyBoardType = "default",
    isPassword = false,
}:props) => {
    return(
        <View style={{width: '100%'}} >
            <View>
                <Text style={{fontSize: 16, fontWeight: '600'}} >{title}</Text>
            </View>
            <Spacer height={2} />
            <TextInput 
                placeholder={placeholder} 
                onChangeText={text => onChange(text,inputName)}
                value={value}
                autoCapitalize="none"
                keyboardType={keyBoardType}
                secureTextEntry={isPassword}
                style={{fontSize: 14}}
            />
            {
                isOk ?
                <View/>
                :
                <Text>{""}</Text>
            }
        </View>
    )
}

export default CustomInput;