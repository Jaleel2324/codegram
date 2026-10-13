
import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

type PostProps = {
  username: string;
  caption: string;
  initialLikes: number;
  avatar: string;
  image: string;
};

export default function Post({
  username,
  caption,
  initialLikes,
  avatar,
  image,
}: PostProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const likeCount = initialLikes + (liked ? 1 : 0);

  function handleLike() {
    setLiked((previous) => !previous);
  }

  return (
    <View style={styles.post}>
      {/* Profile header */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
          contentFit="cover"
        />

        <Text style={styles.username}>
          {username}
        </Text>

        <Ionicons
          name="ellipsis-horizontal"
          size={22}
          color="#FFFFFF"
        />
      </View>

      {/* Main post image */}
      <Image
        source={{ uri: image }}
        style={styles.postImage}
        contentFit="cover"
      />

      {/* Action buttons */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Pressable
            onPress={handleLike}
            accessibilityRole="button"
            accessibilityLabel={liked ? "Unlike post" : "Like post"}
          >
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={28}
              color={liked ? "#FF3040" : "#FFFFFF"}
            />
          </Pressable>

          <Ionicons
            name="chatbubble-outline"
            size={26}
            color="#FFFFFF"
          />

          <Ionicons
            name="paper-plane-outline"
            size={26}
            color="#FFFFFF"
          />
        </View>

        <Pressable
          onPress={() => setSaved((previous) => !previous)}
          accessibilityRole="button"
          accessibilityLabel={saved ? "Remove bookmark" : "Save post"}
        >
          <Ionicons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={26}
            color="#FFFFFF"
          />
        </Pressable>
      </View>

      {/* Likes and caption */}
      <Text style={styles.likes}>
        {likeCount} likes
      </Text>

      <Text style={styles.caption}>
        <Text style={styles.captionUsername}>
          {username}{" "}
        </Text>
        {caption}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#0F0F0F",
    marginBottom: 20,
    paddingBottom: 15,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 10,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  username: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    flex: 1,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#252525",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  likes: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 12,
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
  captionUsername: {
    fontWeight: "bold",
  },
});
