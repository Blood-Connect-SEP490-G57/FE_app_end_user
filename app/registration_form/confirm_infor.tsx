import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { ScrollView, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Accordion,
  AccordionIcon,
  AccordionTrigger,
  AccordionHeader,
  AccordionContent,
  AccordionItem,
  AccordionTitleText,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ChevronUpIcon } from "@/components/ui/icon";
import { ChevronDownIcon } from "@/components/ui/icon";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";

export default function ConfirmInfor() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text className="text-2xl font-bold text-center">
          Xác nhận thông tin
        </Text>
        <MaterialCommunityIcons
          name="check-circle"
          size={50}
          color="green"
          className="mx-auto my-4 text-center"
        />
        <Text className="text-lg font-bold text-center mb-4">
          Bạn đã đăng ký thành công
        </Text>

        <Card className="p-4 mx-4 mb-4">
          <Accordion size="md" variant="unfilled" type="single">
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>
                          Thông tin cá nhân
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon
                            as={ChevronDownIcon}
                            className="ml-3"
                          />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">CCCD:</Text>
                  <Text className="text-md text-gray-500">12654321</Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Họ tên:</Text>
                  <Text className="text-md text-gray-500">Nguyễn Văn A</Text>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Giới tính:</Text>
                  <Text className="text-md text-gray-500">Nam</Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Ngày sinh:</Text>
                  <Text className="text-md text-gray-500">12/12/2000</Text>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Nhóm máu:</Text>
                  <Text className="text-md text-gray-500">-</Text>
                </View>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-4 mx-4 mb-4">
          <Accordion size="md" variant="unfilled" type="single">
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>
                          Thông tin liên hệ
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon
                            as={ChevronDownIcon}
                            className="ml-3"
                          />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Địa chỉ:</Text>
                  <Text className="text-md text-gray-500">
                    123 Đường ABC, Quận 1, TP.HCM
                  </Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Email:</Text>
                  <Text className="text-md text-gray-500">
                    nguyenvana@gmail.com
                  </Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Số điện thoại:</Text>
                  <Text className="text-md text-gray-500">0987654321</Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Nghề nghiệp:</Text>
                  <Text className="text-md text-gray-500">Công an</Text>
                </View>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-4 mx-4 mb-4">
          <Accordion size="md" variant="unfilled" type="single">
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>Phiếu đăng ký</AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon
                            as={ChevronDownIcon}
                            className="ml-3"
                          />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </ScrollView>
      <View className="flex-row items-center justify-center">
        <Button className="" onPress={() => router.push("/account/home")}>
          <ButtonText>Trở về trang chủ</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
    
  );
}
