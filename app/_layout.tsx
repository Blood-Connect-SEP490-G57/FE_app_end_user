import { Stack, Tabs } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '../global.css';
import { Image } from '@/components/ui/image';
export default function RootLayout({}) {
  return (
    <GluestackUIProvider>
      <Stack
        screenOptions={{
          headerShown: true,
        }}
      >

        {/* home */}
        <Stack.Screen name="index" options={{ 
          headerShown: false,
        }} />

        {/* account */}
        <Stack.Screen name="account" options={{ 
          headerShown: false,
        }} />
        {/* profile */}
        <Stack.Screen name="profile" options={{ 
          headerShown: true,
          headerTitle: 'Thông tin cá nhân',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }} />
        {/* auth */}
        {/* register */}
        <Stack.Screen name="auth/register" options={{ 
          headerShown: true,
          headerTitle: 'Đăng ký',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
         }} />

        {/* registration_form  */}
        <Stack.Screen name="registration_form/confirm_location" options={{ 
          headerShown: true,
          headerTitle: 'Xác nhận địa điểm',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }} />
        {/* registration_form/register_form */}
        <Stack.Screen name="registration_form/registration_form" options={{ 
          headerShown: true,
          headerTitle: 'Phiếu đăng ký',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }} />
        {/* registration_form/confirm_information */}
        <Stack.Screen name="registration_form/confirm_infor" options={{ 
          headerShown: true,
          headerTitle: 'Xác nhận thông tin',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }} />
        {/* auth/forgot-password */}
        <Stack.Screen name="auth/forgot-password" options={{ 
          headerShown: true ,
          headerTitle: 'Quên mật khẩu',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }} />
        {/* auth/otp */}
        <Stack.Screen name="auth/otp" options={{ 
          headerShown: true,
          headerTitle: 'Nhập mã OTP',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }} />
      </Stack>
    </GluestackUIProvider>
  );
}
