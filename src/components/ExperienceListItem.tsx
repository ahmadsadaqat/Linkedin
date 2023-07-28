import { Experience } from "@/types";
import { View, Text, Image, StyleSheet } from "react-native";

type ExperienceListItemProps = {
  experience: Experience;
};

export default function ExperienceListItem({
  experience,
}: ExperienceListItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: experience.companyImage }} style={styles.image} />
      <View style={styles.containerContent}>
        <Text style={styles.title}>{experience.title}</Text>
        <Text>{experience.companyName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
  },
  containerContent: {
    paddingLeft: 5,
  },
  image: {
    width: 50,
    aspectRatio: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});
