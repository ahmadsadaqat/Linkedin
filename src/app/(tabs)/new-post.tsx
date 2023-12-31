import {
  Image,
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { gql, useMutation } from "@apollo/client";

const insertPost = gql`
  mutation MyMutation($userid: ID, $image: String, $content: String!) {
    insertPost(content: $content, image: $image, userid: $userid) {
      content
      id
      image
      userid
    }
  }
`;

export default function NewPostScreen() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const [handleMutation, { loading, error, data }] = useMutation(insertPost);

  const navigation = useNavigation();
  const router = useRouter();

  const onPost = async () => {
    console.warn("post created", content);
    try {
      await handleMutation({
        variables: {
          userid: 2,
          content,
        },
      });

      router.push("/(tabs)/");
      setContent("");
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 0.5,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onPost} style={styles.postButton}>
          <Text style={styles.postButtonText}>
            {loading ? <ActivityIndicator /> : "Submit"}
          </Text>
        </Pressable>
      ),
    });
  }, [onPost, loading]);
  return (
    <View style={styles.container}>
      <TextInput
        returnKeyType="done"
        value={content}
        onChangeText={setContent}
        style={styles.input}
        placeholder="What do you want to talk about?"
        multiline
      />

      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.footer}>
        <Pressable onPress={pickImage} style={styles.iconButton}>
          <FontAwesome name="image" size={24} color="black" />
        </Pressable>
        <View style={styles.iconButton}>
          <FontAwesome name="camera" size={24} color="black" />
        </View>
        <View style={styles.iconButton}>
          <FontAwesome name="glass" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  input: {
    height: 100,
    borderBottomWidth: 0.2,
    borderColor: "lightgray",
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

  // Image
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: "auto",
  },

  // Footer
  footer: {
    flexDirection: "row",
    marginTop: "auto",
    justifyContent: "space-between",
  },
  iconButton: {
    backgroundColor: "gainsboro",
    padding: 20,
    borderRadius: 100,
  },
});
