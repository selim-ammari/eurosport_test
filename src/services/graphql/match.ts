import {gql} from "@apollo/client";
import client from "./apollo";
const GET_MATCHES = gql`
  query GetMatches {
    matches {
       id
       players {
        id
        firstname
        lastname
        shortname
        country {
            picture {
                url
            }
        }
       }
       winner {
        id
       }
       startTime
       endTime
    }
  }
`;

export function fetchMatchsFromAPI() {
    return client.mutate({
        mutation: GET_MATCHES,
    });
}