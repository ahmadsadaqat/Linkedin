import { Post } from "@/types";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

type PostListItemProps = {
  post: Post;
};

type FooterItemProps = {
  text: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
};

function FooterItem({ text, icon }: FooterItemProps) {
  return (
    <View style={styles.footerItem}>
      <FontAwesome name={icon} size={16} color="gray" />
      <Text style={{ marginLeft: 5, color: "gray", fontWeight: "500" }}>
        {text}
      </Text>
    </View>
  );
}

export function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={`/posts/${post.id}`} asChild>
      <Pressable style={styles.container}>
        {/* Header */}
        <Link href={`/users/${post.profile.id}`} asChild>
          <Pressable style={styles.header}>
            <Image
              source={{ uri: post.profile.image }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{post.profile.name}</Text>
              <Text>{post.profile.position}</Text>
            </View>
          </Pressable>
        </Link>

        {/* Text content */}
        <Text style={styles.content}>{post.content}</Text>

        {/* Image content */}
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <FooterItem text="Like" icon="thumbs-o-up" />
          <FooterItem text="Comment" icon="comment-o" />
          <FooterItem text="Share" icon="share" />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  // Header
  header: {
    flexDirection: "row",
    padding: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  // Body
  content: {
    margin: 10,
    marginTop: 0,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
  },
  // Footer
  footer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderColor: "lightgray",
  },
  footerItem: {
    flexDirection: "row",
  },
});
