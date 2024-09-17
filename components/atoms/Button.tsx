import {Button as NativeButton, View} from "react-native";

export default function Button( {buttonText} ){
    return <View>
        <NativeButton title={buttonText}/>
    </View>
}