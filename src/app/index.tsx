
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Post from "../components/Post";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Codegram</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Post
          username="jaleel"
          caption="Building my first mobile app!"
          initialLikes={12}
        />

        <Post
          username="developer"
          caption="React Native is powerful!"
          initialLikes={48}
        />

        <Post
          username="codegram"
          caption="Our social media journey begins."
          initialLikes={103}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
