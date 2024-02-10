
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/',
  cache: new InMemoryCache(),
});

export default client;
