import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://catu.stepzen.net/api/coy-dachshund/__graphql",
  headers: {
    Authorization:
      "apikey catu::stepzen.io+1000::5fa91e276ffc9a6744162de29d5e5c7013ebf86cfe27149e4a76adcefc3b02bf",
  },
  cache: new InMemoryCache(),
});

export default client;
