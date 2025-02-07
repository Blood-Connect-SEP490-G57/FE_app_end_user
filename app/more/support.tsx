import { ScrollView, SafeAreaView, View } from "react-native";
import { Text } from "@/components/ui/text";
import BackButton from "@/components/ui/backbtn";
import { Heading } from "@/components/ui/heading";
export default function Support() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-4 flex-row items-center bg-gray-100 ">
          <BackButton />
          <Heading className="ml-4 text-lg font-semibold">Hỗ trợ</Heading>
        </View>
        <View>
          <Text>Hỗ trợ</Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
