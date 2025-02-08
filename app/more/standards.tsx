import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import { ChevronDownIcon } from "@/components/ui/icon";
import { ChevronUpIcon } from "@/components/ui/icon";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BackButton from "@/components/ui/backbtn";
export default function Standards() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Header với nút Back
         */}
        <View className="p-4 flex-row items-center bg-gray-100 ">
          <BackButton />
          <Heading className="ml-4 text-lg font-semibold">
            Câu hỏi thường gặp
          </Heading>
        </View>
        <View className="p-2">
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
                      - Ăn nhẹ, nước uống tại chỗ: tương đương 30.000 đồng (1
                      chai trà xanh không độ, 01 hộp chocopie 66gram, 01 hộp
                      bánh Goute 35,5gram).
                    </Text>
                    <Text>
                      - Hỗ trợ chi phí đi lại (bằng tiền mặt): 50.000 đồng.
                    </Text>
                    <Text>
                      - Nhận phần quà tặng giá trị tương đương: 100.000đ khi
                      hiến máu 250ml 150.000đ khi hiến máu 350ml 180.000đ khi
                      hiến máu 450ml
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});
