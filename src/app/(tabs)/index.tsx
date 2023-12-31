import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { PostListItem } from "@/components/PostListItem";
import { FlatList } from "react-native-gesture-handler";

import { gql, useQuery } from "@apollo/client";

const postList = gql`
  query PostListQuery {
    postList {
      id
      content
      image
      profile {
        id
        name
        position
        image
      }
    }
  }
`;

export default function HomeFeedScreen() {
  const { loading, error, data } = useQuery(postList);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
    return <Text>Something Went Wrong</Text>;
  }

  return (
    <FlatList
      data={data.postList}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}
