import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router'; 
//https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76c3340a-ac2f-4fd7-a402-05cff3ff8b6b/ddvn3zp-fa1e1739-7cd7-45d3-b707-f30fe9fd1e65.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2YzMzNDBhLWFjMmYtNGZkNy1hNDAyLTA1Y2ZmM2ZmOGI2YlwvZGR2bjN6cC1mYTFlMTczOS03Y2Q3LTQ1ZDMtYjcwNy1mMzBmZTlmZDFlNjUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EQlZT2DAzhG1kuaNT-xcK5jDmXGHa92FTRZkEVLRtEM
export default function Index() {
  return (
    <View style ={styles.container}>
      <Image
        source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76c3340a-ac2f-4fd7-a402-05cff3ff8b6b/ddvn3zp-fa1e1739-7cd7-45d3-b707-f30fe9fd1e65.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2YzMzNDBhLWFjMmYtNGZkNy1hNDAyLTA1Y2ZmM2ZmOGI2YlwvZGR2bjN6cC1mYTFlMTczOS03Y2Q3LTQ1ZDMtYjcwNy1mMzBmZTlmZDFlNjUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EQlZT2DAzhG1kuaNT-xcK5jDmXGHa92FTRZkEVLRtEM' }} // Example GIF URL
        style={{ width: 1000, height: 320 }} // Ensure the style is here
      />
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0a81a', // Optional: background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20, // Add some space between title and link
    alignContent: 'center'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000000', // Change this to your desired color
    justifyContent: 'center'
  },
 
});

