import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style ={styles.container}>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0a81a', // Optional: background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20, // Add some space between title and link
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000000', // Change this to your desired color
    justifyContent: 'center'
  },
});
