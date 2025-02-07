import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

export default function BackButton() {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} className="z-10" testID="link">
      <MaterialIcons name="chevron-left" color="gray" size={30} />
    </Pressable>
  );
}
