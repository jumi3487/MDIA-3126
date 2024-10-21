import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
        <View>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">Hover me</button>
            <Text className="border-blue-700 border-2 ">Cheese page 🧀 </Text>
            <Link href="/sandwich">This is my sandwich 💀 </Link>
        </View>
    )
}