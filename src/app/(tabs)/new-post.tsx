import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect, useState } from "react";

export default function NewPostScreen() {
  const [content, setContent] = useState("");

  const navigation = useNavigation();
  const router = useRouter();

  const onPost = () => {
    console.warn("post created", content);

    router.push("/(tabs)/");
    setContent("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onPost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </Pressable>
      ),
    });
  }, [onPost]);
  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
        placeholder="What do you want to talk about?"
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  input: {
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // Header
  postButton: {
    backgroundColor: "royalblue",
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
