import { ScrollView, View, Text } from "react-native";

import posts from "../../../assets/data/posts.json";
import { PostListItem } from "@/components/PostListItem";
import { useLocalSearchParams } from "expo-router";

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <Text style={{ fontSize: 25 }}>Post Not Found</Text>;
  }
  return (
    <ScrollView>
      <PostListItem post={post} />
    </ScrollView>
  );
}
