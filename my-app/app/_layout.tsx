import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home',
        headerStyle: { backgroundColor: '#2196F3' }, // Different color for this screen
        headerTintColor: '#000000', // Color of the title text
       }} />
      <Stack.Screen name="about" options={{ title: 'About',
        headerStyle: { backgroundColor: '#2196F3' }, 
        headerTintColor: '#000000', 
       }} />
    </Stack>
  );
}
