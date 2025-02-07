import { Stack, Tabs } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "../global.css";
import { Image } from "@/components/ui/image";
export default function RootLayout({}) {
  return (
    <GluestackUIProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
      </Stack>
    </GluestackUIProvider>
  );
}
