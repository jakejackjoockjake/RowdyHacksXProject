import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
<<<<<<< Updated upstream
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
=======
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          headerStyle: { backgroundColor: '#d85116' }, // Set the background color of the header
          headerTintColor: '#ffffff', // Set the color of the title and icons
          headerTitleStyle: { color: '#ffffff' }, // Set the title text color explicitly

        }} 
      />
      <Stack.Screen 
        name="about" 
        options={{ 
          title: 'About',
          headerStyle: { backgroundColor: '#d85116' }, // Set the background color of the header
          headerTintColor: '#ffffff', // Set the color of the title and icons
          headerTitleStyle: { color: '#ffffff' }, // Set the title text color explicitly

        }} 
      />
>>>>>>> Stashed changes
    </Stack>
  );
}
