import { User } from "@/types";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Link } from "expo-router";

type UserListItemProps = {
  user: User;
};

export default function UserListItem({ user }: UserListItemProps) {
  return (
    <Link href={`/users/${user.id}`} asChild>
      <Pressable style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text>{user.position}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
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
});
