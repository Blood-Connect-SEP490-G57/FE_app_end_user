import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
export default function History() {
  return (
    <View>
     <Card size="lg" variant="elevated" className="m-3">
      <Heading size="md" className="mb-1">
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
    </Card>
    </View>
  );
}
    