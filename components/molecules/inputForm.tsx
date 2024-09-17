import { View, TextInput} from "react-native";
import Button from "@/components/atoms/Buttons";
import Button from "@/components/atoms/Labels";

export default function inputForm ({ labelText, buttonText }){
    return (
        <View
        style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center"
        }}>
            <Label labelText={labelText} />
            <TextInput 
            style={{
                border: "1px solid"
            }}/><Button buttonText={buttonText} />
        </View>
    )
}