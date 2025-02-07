import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BackButton from "@/components/ui/backbtn";
import { Heading } from "@/components/ui/heading";
export default function NewsDetailScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Header với nút Back */}
        <View className="p-4 flex-row items-center bg-gray-100 ">
          <BackButton />
          <Heading className="ml-4 text-lg font-semibold">Tin tức</Heading>
        </View>
        <Text>NewsDetailScreen</Text>
      </ScrollView>

    </SafeAreaView>
  );
}
