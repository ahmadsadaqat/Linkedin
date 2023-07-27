import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";

import userJson from "../../../assets/data/users.json";
import { User } from "@/types";

export default function UserProfileScreen() {
  const [user, setUser] = useState<User>(userJson);

  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const onConnect = () => {
    console.warn("connect Pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: user.name });
  }, [user?.name]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Bg image */}
        <Image source={{ uri: user.backImage }} style={styles.backImage} />
        {/* Profile Image */}
        <View style={styles.headerContent}>
          <Image source={{ uri: user.image }} style={styles.userImage} />
          {/* Name And Position */}
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.position}</Text>

          {/* Connect Button */}
          <Pressable onPress={onConnect} style={styles.button}>
            <Text style={styles.buttonText}>Connect</Text>
          </Pressable>
        </View>
      </View>
      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionTitleText}>{user.about}</Text>
      </View>
      {/* Experience */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "white",
  },
  backImage: {
    width: "100%",
    aspectRatio: 5 / 2,
    marginBottom: -60,
  },
  headerContent: {
    padding: 10,
    paddingTop: 0,
  },
  userImage: {
    width: 100,
    borderRadius: 60,
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: "white",
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },
  // Button and Button Text
  button: {
    backgroundColor: "royalblue",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  // About
  section: {
    backgroundColor: "white",
    marginVertical: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 5,
  },
  sectionTitleText: {
    lineHeight: 20,
  },
});
