import { View } from "react-native";
import inputForm from "@/components/molecules/inputForm";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <inputForm
      buttonText="this is a button"
      labelText="Hi this is label"></inputForm>
      <Text>hello</Text>
    </View>
  );
}
