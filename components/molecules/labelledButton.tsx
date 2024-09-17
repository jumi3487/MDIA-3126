import { Button as NativeButton, View} from "react-native";
import Button from "@/components/atoms/Buttons";
import Button from "@/components/atoms/Labels";

export default function LabelledButton ({ labelText, buttonText }){
    return (
        <View>
            <Label labelText={labelText} />
            <Button buttonText={buttonText} />
        </View>
    )
}