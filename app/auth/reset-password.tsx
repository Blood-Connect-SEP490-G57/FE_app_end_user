import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { KeyboardDismissWrapper } from "@/components/ui/KeyboardDismissWrapper";
export default function ResetPassword() {
  return (
    <SafeAreaView>
      <KeyboardDismissWrapper>
        <ScrollView>
          <View>
            <Text>Reset Password</Text>
          </View>
        </ScrollView>
      </KeyboardDismissWrapper>
    </SafeAreaView>
  );
}
