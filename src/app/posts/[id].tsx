import { ScrollView, View, Text, ActivityIndicator } from "react-native";

// import posts from "../../../assets/data/posts.json";
import { PostListItem } from "@/components/PostListItem";
import { useLocalSearchParams } from "expo-router";
import { gql, useQuery } from "@apollo/client";

const post = gql`
  query MyQuery($id: ID!) {
    post(id: $id) {
      content
      id
      image
      profile {
        id
        image
        name
        position
      }
    }
  }
`;

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const { loading, error, data } = useQuery(post, { variables: { id } });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
    return <Text>Something Went Wrong, please try Again later</Text>;
  }

  console.log(data);
  return (
    <ScrollView>
      <PostListItem post={data.post} />
    </ScrollView>
  );
}
