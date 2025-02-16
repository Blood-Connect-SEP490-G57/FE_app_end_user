import { ScrollView, View, SafeAreaView } from "react-native";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxLabel,
  CheckboxIndicator,
} from "@/components/ui/checkbox";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import React, { useState } from "react";
import { CheckIcon } from "@/components/ui/icon";
import { useRouter } from "expo-router";
import BackButton from "@/components/ui/backbtn";
import { Heading } from "@/components/ui/heading";
import { KeyboardDismissWrapper } from "@/components/ui/KeyboardDismissWrapper";

// Component cho banner
const QuestionBanner = ({ title, description }: { title: string, description: string }) => (
  <View className="bg-red-500 p-4 rounded-lg mb-4">
    <Text className="text-white text-lg font-bold">{title}</Text>
    {description && (
      <Text className="text-white text-sm mt-1">{description}</Text>
    )}
  </View>
);

// Component cho một group câu hỏi
const QuestionGroup = ({ question, options }: { question: any, options: any }) => {
  return (
    <View className="mx-4 mb-6">
      {/* Banner Header */}
      <View className="bg-red-500 p-4 rounded-t-xl flex-row items-center justify-between">
        <Text className="text-xl font-semibold text-white">
          Câu {question.id} : {question.question}
        </Text>
      </View>

      {/* Content Group */}
      <View className="bg-white rounded-b-xl p-4 shadow-md">
        <View className="space-y-3">
          {options.map((option: any, index: number) => (
            <View key={index}>
              <View className={option.hasInput ? "flex-row items-center space-x-2" : ""}>
                <Checkbox value={option.value}>
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel className="text-base text-gray-700">{option.label}</CheckboxLabel>
                </Checkbox>
              </View>
              {option.hasInput && (
                <Input variant="outline" size="md" className="mt-2">
                  <InputField placeholder="Nhập chi tiết..." />
                </Input>
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

// Định nghĩa các câu hỏi
const QUESTIONS = [
  {
    id: 1,
    question: "Anh/chị đã từng hiến máu chưa?",
    options: [
      { value: "yes", label: "Có" },
      { value: "no", label: "Không" },
    ],
  },
  {
    id: 2,
    question: "Hiện tại, anh/chị có bị các bệnh: viêm khớp, dạ dày, viêm gan/vàng da, bệnh tim, huyết áp thấp/cao, hen, ho kéo dài, bệnh máu, lao?",
    options: [
      { value: "yes", label: "Có" },
      { value: "no", label: "Không" },
      { value: "other", label: "Khác", hasInput: true },
    ],
  },
  {
    id: 3,
    question: "Trong vòng 12 tháng gần đây, anh/chị có mắc các bệnh và đã được điều trị khỏi",
    options: [
      { value: "diseases", label: "Sốt rét, Giang mai, Lao, Viêm não, Phẫu thuật ngoại khoa" },
      { value: "transfusion", label: "Được truyền máu và các chế phẩm máu" },
      { value: "vaccine", label: "Tiêm Vacxin bệnh dại" },
      { value: "no", label: "Không" },
      { value: "other", label: "Khác", hasInput: true },
    ],
  },
];

export default function RegistrationForm() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header với nút Back */}
      <View className="p-4 flex-row items-center bg-white">
        <BackButton />
        <Heading className="ml-4 text-lg font-semibold">
          Phiếu đăng ký hiến máu
        </Heading>
      </View>

      <ScrollView className="flex-1">
        {/* Description */}
        <View className="p-4 bg-white mb-2">
          <Text className="text-sm text-gray-500">
            Trả lời các câu hỏi để hoàn thành phiếu đăng ký
          </Text>
        </View>

        {/* Questions */}
        {QUESTIONS.map((question) => (
          <QuestionGroup 
            key={question.id} 
            question={question} 
            options={question.options} 
          />
        ))}

        {/* Submit Button */}
        <View className="mx-4 mb-6">
          <Button
            size="lg"
            variant="solid"
            action="primary"
            className="w-full bg-red-500"
            onPress={() => router.push("/registration_form/confirm_infor")}
          >
            <ButtonText>Tiếp tục</ButtonText>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
