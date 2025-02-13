import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon, ChevronUpIcon } from "@/components/ui/icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const upcomingEvents = [
    {
      id: "1",
      date: "24/01/2025",
      time: "10:00 - 12:00",
      location: "Trung tâm y tế Ninh Bình",
      address: "123 Đường số 1, Phường 1, Quận 1, TP. Ninh Bình",
      operatingHours: "07:00 - 12:00 / 14:00 - 17:00",
      registered: 100,
      capacity: 260,
    },
    {
      id: "2",
      date: "26/01/2025",
      time: "08:00 - 11:00",
      location: "Bệnh viện Đa khoa Ninh Bình",
      address: "456 Đường số 2, Phường 2, Quận 2, TP. Ninh Bình",
      operatingHours: "07:00 - 11:00 / 13:30 - 16:30",
      registered: 150,
      capacity: 300,
    },
    {
      id: "3",
      date: "24/01/2025",
      time: "10:00 - 12:00",
      location: "Trung tâm y tế Ninh Bình",
      address: "123 Đường số 1, Phường 1, Quận 1, TP. Ninh Bình",
      operatingHours: "07:00 - 12:00 / 14:00 - 17:00",
      registered: 100,
      capacity: 260,
    },
  ];

  const renderEventCard = ({ item }: { item: any }) => (
    <Card className="bg-gray-100 mx-2 rounded-xl w-[320px]">
      <Text className="text-lg font-semibold text-gray-900 mb-3 font-bold">
        Hiến máu - {item.date}
      </Text>

      <View className="space-y-2">
        <View className="flex-row items-center mt-2">
          <MaterialCommunityIcons
            name="clock-outline"
            size={20}
            color="red"
            className="mr-2"
          />
          <Text>{item.time}</Text>
        </View>

        <View className="flex-row items-center space-x-2 mt-2">
          <MaterialCommunityIcons
            name="hospital-building"
            size={20}
            color="red"
            className="mr-2"
          />
          <Text>{item.location}</Text>
        </View>

        <View className="flex-row items-center space-x-2 mt-2">
          <MaterialCommunityIcons
            name="map-marker"
            size={20}
            color="red"
            className="mr-2"
          />
          <Text className="text-gray-600 flex-1">{item.address}</Text>
        </View>

        <View className="flex-row items-center space-x-2 mt-2">
          <MaterialCommunityIcons
            name="calendar-clock"
            size={20}
            color="red"
            className="mr-2"
          />
          <Text className="text-gray-600 flex-1">
            Thời gian hoạt động: {item.operatingHours}
          </Text>
        </View>
      </View>

      <Divider className="mt-2" />
      <View className="space-y-3 mt-2">
        <View className="mb-4">
          <Text className="text-gray-600 mb-2">
            Số người đã đăng ký: {item.registered}/{item.capacity}
          </Text>
          <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <View
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${(item.registered / item.capacity) * 100}%` }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/registration_form/confirm_location")}
          className="bg-red-500 py-2 px-4 rounded-full active:bg-red-600"
        >
          <Text className="text-white text-center font-medium">
            Đăng ký ngay
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );

  const QuickStats = () => {
    return (
      <View className="flex-col justify-between space-x-4 mb-2">
        <Text className="text-xl font-bold text-gray-900 mb-2 mt-2">
          Truy cập nhanh
        </Text>
        <View className="flex-row items-center justify-between space-x-4">
          <TouchableOpacity
            onPress={() => router.push("/more/history")}
            className="flex-1 bg-red-500 rounded-xl ml-2 mr-2"
          >
            <Card className="flex-1 bg-red-500 rounded-xl">
              <Text className="text-white font-bold text-center">
                Lịch sử hiến máu
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/more/history")}
            className="flex-1 bg-red-500 rounded-xl ml-2 mr-2"
          >
            <Card className="flex-1 bg-red-500 rounded-xl">
              <Text className="text-white font-bold text-center">
                Lịch sử hiến máu
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <StatusBar /> */}
      <ImageBackground
        source={require("@/assets/images/background/bg.jpg")}
        className="absolute inset-0 w-full h-full"
      />
      <ScrollView className="flex-1 border-radius-xl">
        <View className="p-4">
          <View className="p-4">
            <View className="flex-row items-center justify-start">
              <Image
                source={require("@/assets/images/user.png")}
                className="w-10 h-10 rounded-full"
              />
              <Heading className="font-bold text-white ml-2">
                Giọt máu hi vọng
              </Heading>
            </View>
          </View>
        </View>
        <View className="p-4 space-y-6 bg-white rounded-t-xl">
          <QuickStats />
          <Text className="text-xl font-bold text-gray-900 mb-2 mt-6">
            Lịch hiến máu gần nhất
          </Text>
          <FlatList
            data={upcomingEvents}
            renderItem={renderEventCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            snapToInterval={320 + 16}
            decelerationRate="fast"
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.round(
                event.nativeEvent.contentOffset.x / (320 + 16)
              );
              setActiveIndex(newIndex);
            }}
          />

          <View className="flex-row justify-center items-center space-x-2 mt-2">
            {upcomingEvents.map((_, index) => (
              <View
                key={index}
                className={`h-2 rounded-full ${
                  index === activeIndex ? "w-6 bg-red-500" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </View>

          <Text className="text-xl font-bold text-gray-900 mb-2 mt-6">
            Quyền lợi của người hiến máu
          </Text>

          <Card className="p-0 overflow-hidden">
            <Accordion
              size="md"
              variant="filled"
              type="single"
              isCollapsible={true}
              isDisabled={false}
              className="w-full"
            >
              <AccordionItem value="a">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => (
                      <>
                        <View className="flex-row items-center space-x-3">
                          <MaterialCommunityIcons
                            name="gift-outline"
                            size={24}
                            color="red"
                            className="mr-2"
                          />
                          <AccordionTitleText>
                            Bồi dưỡng trực tiếp
                          </AccordionTitleText>
                        </View>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} />
                        ) : (
                          <AccordionIcon as={ChevronDownIcon} />
                        )}
                      </>
                    )}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <View className="space-y-2">
                    <Text className="text-gray-600">
                      - Ăn nhẹ, nước uống tại chỗ: tương đương 30.000 đồng
                    </Text>
                    <Text className="text-gray-600">
                      - Hỗ trợ chi phí đi lại: 50.000 đồng
                    </Text>
                    <Text className="text-gray-600">
                      - Nhận phần quà tặng tương đương:
                      {"\n"}• 100.000đ khi hiến máu 250ml
                      {"\n"}• 150.000đ khi hiến máu 350ml
                      {"\n"}• 180.000đ khi hiến máu 450ml
                    </Text>
                  </View>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <View className="flex-row items-center space-x-3">
                            <MaterialCommunityIcons
                              name="certificate-outline"
                              size={24}
                              color="red"
                              className="mr-2"
                            />
                            <AccordionTitleText>
                              Được cấp giấy chứng nhận
                            </AccordionTitleText>
                          </View>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} />
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} />
                          )}
                        </>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <Text className="text-gray-600">
                    - Được cấp giấy chứng nhận hiến máu.
                  </Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <View className="flex-row items-center space-x-3">
                            <MaterialCommunityIcons
                              name="heart"
                              size={24}
                              color="red"
                              className="mr-2"
                            />
                            <AccordionTitleText>
                              Tư vấn sức khỏe
                            </AccordionTitleText>
                          </View>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} />
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} />
                          )}
                        </>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <Text className="text-gray-600">
                    - Được tư vấn sức khỏe trước khi hiến máu.
                  </Text>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Text className="text-xl font-bold text-gray-900 mb-2 mt-2">
            Hướng dẫn & Tiêu chuẩn
          </Text>

          <View className="flex-row space-x-3">
            <TouchableOpacity
              className="flex-1 bg-gray-100 p-4 rounded-xl items-center space-y-2 mr-2"
              onPress={() => router.push("/more/advice")}
            >
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                size={24}
                color="red"
              />
              <Text className="text-gray-600 text-center">
                Lời khuyên trước và sau hiến máu
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 bg-gray-100 p-4 rounded-xl items-center space-y-2"
              onPress={() => router.push("/more/standards")}
            >
              <MaterialCommunityIcons
                name="checkbox-marked-circle-outline"
                size={24}
                color="red"
              />
              <Text className="text-gray-600 text-center">
                Tiêu chuẩn tham gia
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
