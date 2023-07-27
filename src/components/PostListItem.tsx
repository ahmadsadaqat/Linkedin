import { Post } from "@/types";
import { Text, View } from "react-native";

type PostListItemProps = {
  post: Post;
};

export function PostListItem({ post }: PostListItemProps) {
  console.log(post);
  return (
    <View>
      <Text>List of items</Text>
      <Text>{post.content}</Text>
    </View>
  );
}
