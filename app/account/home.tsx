import { Card } from "@/components/ui/card";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon, ChevronUpIcon } from "@/components/ui/icon";
import { Divider } from "@/components/ui/divider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 32; // 32 is total horizontal padding

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
    <Card size="lg" variant="outline" style={[styles.card, styles.eventCard]}>
      <Text style={styles.eventTitle} bold>
        Hiến máu - {item.date}
      </Text>
      <View style={styles.eventDetails}>
        <View style={styles.infoRow}>
          <MaterialCommunityIcons name="clock-outline" size={20} color="#666" />
          <Text style={styles.infoText}>{item.time}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialCommunityIcons
            name="hospital-building"
            size={20}
            color="#666"
          />
          <Text style={styles.infoText}>{item.location}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialCommunityIcons name="map-marker" size={20} color="#666" />
          <Text style={styles.infoText}>{item.address}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialCommunityIcons
            name="calendar-clock"
            size={20}
            color="#666"
          />
          <Text style={styles.infoText}>
            Thời gian hoạt động: {item.operatingHours}
          </Text>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.registrationInfo}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Số người đã đăng ký: {item.registered}/{item.capacity}
          </Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${(item.registered / item.capacity) * 100}%` },
              ]}
            />
          </View>
        </View>
        <Button
          size="md"
          variant="solid"
          action="negative"
          style={styles.registerButton}
        >
          <ButtonText>Đăng ký ngay</ButtonText>
        </Button>
      </View>
    </Card>
  );

  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {upcomingEvents.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.sectionTitle} bold>
          Lịch hiến máu gần nhất
        </Text>
        <FlatList
          data={upcomingEvents}
          renderItem={renderEventCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + 16}
          decelerationRate="fast"
          style={styles.eventList}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / (CARD_WIDTH + 16)
            );
            setActiveIndex(newIndex);
          }}
        />
        {renderPaginationDots()}

        <Text style={styles.sectionTitle} bold>
          Quyền lợi của người hiến máu
        </Text>
        <Card style={styles.benefitsCard}>
          <Accordion
            size="md"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
            style={styles.accordion}
          >
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => (
                    <>
                      <View style={styles.accordionTitle}>
                        <MaterialCommunityIcons
                          name="gift-outline"
                          size={24}
                          color="#666"
                          style={styles.accordionIcon}
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
                <AccordionContentText>
                  <Text>
                    - Ăn nhẹ, nước uống tại chỗ: tương đương 30.000 đồng (1 chai
                    trà xanh không độ, 01 hộp chocopie 66gram, 01 hộp bánh Goute
                    35,5gram).
                  </Text>
                  <Text>
                    - Hỗ trợ chi phí đi lại (bằng tiền mặt): 50.000 đồng.
                  </Text>
                  <Text>
                    - Nhận phần quà tặng giá trị tương đương: 100.000đ khi hiến
                    máu 250ml 150.000đ khi hiến máu 350ml 180.000đ khi hiến máu
                    450ml
                  </Text>
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
            <Divider />
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <View style={styles.accordionTitle}>
                          <MaterialCommunityIcons
                            name="certificate-outline"
                            size={24}
                            color="#666"
                            style={styles.accordionIcon}
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
                <AccordionContentText>
                  - Được cấp giấy chứng nhận hiến máu.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
            <Divider />
            <AccordionItem value="c">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <View style={styles.accordionTitle}>
                          <MaterialCommunityIcons
                            name="heart"
                            size={24}
                            color="#666"
                            style={styles.accordionIcon}
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
                <AccordionContentText>
                  - Được tư vấn sức khỏe trước khi hiến máu.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Text style={styles.sectionTitle} bold>
          Hướng dẫn & Tiêu chuẩn
        </Text>
        <View style={styles.guideContainer}>
          <TouchableOpacity
            style={styles.guideCard}
            onPress={() => router.push("/more/advice")}
          >
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              size={24}
              color="#666"
            />
            <Text style={styles.guideText}>
              Lời khuyên trước và sau hiến máu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.guideCard}
            onPress={() => router.push("/more/standards")}
          >
            <MaterialCommunityIcons
              name="checkbox-marked-circle-outline"
              size={24}
              color="#666"
            />
            <Text style={styles.guideText}>Tiêu chuẩn tham gia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  scrollView: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 12,
    color: "#333",
  },
  card: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
  },
  eventTitle: {
    fontSize: 18,
    marginBottom: 12,
    color: "#333",
  },
  eventDetails: {
    gap: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    flex: 1,
    color: "#666",
  },
  divider: {
    marginVertical: 12,
  },
  registrationInfo: {
    marginTop: 8,
  },
  progressContainer: {
    marginBottom: 12,
  },
  progressText: {
    marginBottom: 4,
    color: "#666",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#ef4444",
    borderRadius: 4,
  },
  registerButton: {
    marginTop: 8,
  },
  benefitsCard: {
    padding: 0,
    overflow: "hidden",
  },
  accordion: {
    width: "100%",
  },
  accordionTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  accordionIcon: {
    marginRight: 12,
  },
  guideContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  guideCard: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    gap: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  guideText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },
  eventList: {
    marginHorizontal: -16, // Counteract container padding
    paddingHorizontal: 16,
  },
  eventCard: {
    width: CARD_WIDTH,
    marginRight: 16,
    marginVertical: 8,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#e0e0e0",
  },
  paginationDotActive: {
    backgroundColor: "#ef4444",
    width: 24,
  },
});
