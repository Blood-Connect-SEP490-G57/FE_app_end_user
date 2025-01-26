import { View, ScrollView, SafeAreaView } from "react-native";
import { Text } from "@/components/ui/text";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { AlertCircleIcon } from "@/components/ui/icon";
export default function Contact() {
  return (
    <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
      <FormControl
        size="md"
        isDisabled={false}
        isReadOnly={false}
        isRequired={false}
      >
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="md">
          <InputField
            type="password"
            placeholder="password"
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Must be atleast 6 characters.
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            Atleast 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button className="w-fit self-end mt-4" size="sm">
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
  );
}
