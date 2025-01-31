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

export default function RegistrationForm() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 py-6">
        <Text className="text-center text-2xl font-bold mb-4">
          Phiếu đăng ký hiến máu
        </Text>
        <Text className="text-sm text-center text-gray-500 mb-4">
          Trả lời các câu hỏi để hoàn thành phiếu đăng ký
        </Text>
        <View className="flex flex-col gap-4">
          <Card className="p-4">
            <Text className="text-lg font-bold mb-4">
              1. Anh/chị đã từng hiến máu chưa?
            </Text>
            <View className="space-y-2">
              <Checkbox value="yes">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Có</CheckboxLabel>
              </Checkbox>
              <Checkbox value="no">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Không</CheckboxLabel>
              </Checkbox>
            </View>
          </Card>

          <Card className="p-4">
            <Text className="text-lg font-bold mb-4">
              2. Hiện tại, anh/chị có bị các bệnh: viêm khớp, dạ dày, viêm
              gan/vàng da, bệnh tim, huyết áp thấp/cao, hen, ho kéo dài, bệnh
              máu, lao?
            </Text>
            <View className="space-y-2">
              <Checkbox value="yes">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Có</CheckboxLabel>
              </Checkbox>
              <Checkbox value="no">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Không</CheckboxLabel>
              </Checkbox>
              <View className="flex-row items-center space-x-2">
                <Checkbox value="other">
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Khác</CheckboxLabel>
                  <Input variant="outline" size="md" className="flex-1 ml-2">
                    <InputField placeholder="Nhập bệnh khác..." />
                  </Input>
                </Checkbox>
              </View>
            </View>
          </Card>

          {/* Câu hỏi 3 */}
          <Card className="p-4">
            <Text className="text-lg font-bold mb-4">
              3. Trong vòng 12 tháng gần đây, anh/chị có mắc các bệnh và đã được
              điều trị khỏi
            </Text>
            <View className="space-y-2">
              <Checkbox value="diseases">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Sốt rét, Giang mai, Lao, Viêm não, Phẫu thuật ngoại khoa
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="transfusion">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Được truyền máu và các chế phẩm máu
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="vaccine">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Tiêm Vacxin bệnh dại</CheckboxLabel>
              </Checkbox>

              <Checkbox value="no">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Không</CheckboxLabel>
              </Checkbox>

              <View className="flex-row items-center space-x-2">
                <Checkbox value="other">
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Khác</CheckboxLabel>
                  <Input variant="outline" size="md" className="flex-1 ml-2">
                    <InputField placeholder="Nhập chi tiết..." />
                  </Input>
                </Checkbox>
              </View>
            </View>
          </Card>
          {/* Câu hỏi 4 */}
          <Card className="p-4">
            <Text className="text-lg font-bold mb-4">
              4. Trong vòng 06 tháng gần đây, anh/chị có bị một trong số các
              triệu chứng sau không?
            </Text>
            <View className="space-y-2">
              <Checkbox value="diseases">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Sút cân nhanh không rõ nguyên nhân?
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="transfusion">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Nổi hạch kéo dài?</CheckboxLabel>
              </Checkbox>

              <Checkbox value="vaccine">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Chữa răng, châm cứu?</CheckboxLabel>
              </Checkbox>
              <Checkbox value="xam">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Xăm mình, xỏ lỗ tai, lỗ mũi.</CheckboxLabel>
              </Checkbox>
              <Checkbox value="heroin">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Sử dụng ma tuý?</CheckboxLabel>
              </Checkbox>
              <Checkbox value="hiv">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Quan hệ tình dục với người nhiễm HIV hoặc người có hành vi
                  nguy cơ lây nhiễm HIV
                </CheckboxLabel>
              </Checkbox>
              <Checkbox value="same_sex">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Quan hệ tình dục với người cùng giới?
                </CheckboxLabel>
              </Checkbox>
              <Checkbox value="no">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Không</CheckboxLabel>
              </Checkbox>

              <View className="flex-row items-center space-x-2">
                <Checkbox value="other">
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Khác</CheckboxLabel>
                  <Input variant="outline" size="md" className="flex-1 ml-2">
                    <InputField placeholder="Nhập chi tiết..." />
                  </Input>
                </Checkbox>
              </View>
            </View>
          </Card>

          {/* Câu hỏi 5 */}
          <Card className="p-4">
            <Text className="text-lg font-bold mb-4">
              5. Trong 01 tháng gần đây anh/chị có
            </Text>
            <View className="space-y-2">
              <Checkbox value="diseases">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Khỏi bệnh sau khi mắc bệnh viêm đường tiết niệu, viêm da nhiễm
                  trùng, viêm phế quản, viêm phổi, sởi, quai bị, Rubella, Khác
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="vaccine">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Tiêm vắc xin phòng bệnh?</CheckboxLabel>
              </Checkbox>

              <Checkbox value="epidemic_area">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Đi vào vùng có dịch bệnh lưu hành (sốt rét, sốt xuất huyết,
                  Zika, ...)
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="no">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Không</CheckboxLabel>
              </Checkbox>

              <View className="flex-row items-center space-x-2">
                <Checkbox value="other">
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Khác</CheckboxLabel>
                  <Input variant="outline" size="md" className="flex-1 ml-2">
                    <InputField placeholder="Nhập chi tiết..." />
                  </Input>
                </Checkbox>
              </View>
            </View>
          </Card>

          {/* Câu hỏi 6 */}
          <Card className="p-4">
            <Text className="text-lg font-bold mb-4">
              6. Trong 07 ngày gần đây anh/chị có
            </Text>
            <View className="space-y-2">
              <Checkbox value="flu">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Bị cảm cúm (ho, nhức đầu, sốt...)?
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="medicine">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Dùng thuốc kháng sinh, Aspirin, Corticoid?
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="vaccine">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Tiêm Vacxin phòng Viêm gan siêu vi B, Human Papilloma Virus.
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="no">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Không</CheckboxLabel>
              </Checkbox>

              <View className="flex-row items-center space-x-2">
                <Checkbox value="other">
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Khác</CheckboxLabel>
                  <Input variant="outline" size="md" className="flex-1 ml-2">
                    <InputField placeholder="Nhập chi tiết..." />
                  </Input>
                </Checkbox>
              </View>
            </View>
          </Card>

          {/* Câu hỏi 7 */}
          <Card className="p-4">
            <Text className="text-lg font-bold mb-4">
              7. Câu hỏi dành cho phụ nữ
            </Text>
            <View className="space-y-2">
              <Checkbox value="pregnant">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Hiện có thai, hoặc nuôi con dưới 12 tháng tuổi?
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="menstruation">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Có kinh nguyệt trong vòng một tuần hay không?
                </CheckboxLabel>
              </Checkbox>

              <Checkbox value="no">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Không</CheckboxLabel>
              </Checkbox>
            </View>
          </Card>

          {/* Câu hỏi 8 */}
          <Card className="p-4">
            <Text className="text-lg font-bold mb-4">
              8. Anh/chị có đồng ý xét nghiệm HIV, nhận thông báo và được tư vấn
              khi kết quả xét nghiệm HIV nghi ngờ hoặc dương tính?
            </Text>
            <View className="space-y-2">
              <Checkbox value="yes">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Có</CheckboxLabel>
              </Checkbox>

              <Checkbox value="no">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Không</CheckboxLabel>
              </Checkbox>
            </View>
          </Card>
        </View>
      </ScrollView>

      <View className="px-4 py-2 bg-white border-t border-gray-200">
        <Button
          size="lg"
          variant="solid"
          action="primary"
          className="w-full"
          onPress={() => router.push("/registration_form/confirm_infor")}
        >
          <ButtonText>Tiếp tục</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
