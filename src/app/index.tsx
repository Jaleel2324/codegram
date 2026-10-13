
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Post from "../components/Post";
import { posts } from "../data/posts";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Codegram</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Post
            username={item.username}
            caption={item.caption}
            initialLikes={item.initialLikes}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
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
