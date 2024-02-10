import {gql} from "@apollo/client";
import client from "./apollo";
const GET_PLAYERS = gql`
  query GetPlayers {
    players {
       id
       firstname
       lastname
       shortname
       sex
       picture {
        url
       }
       country {
        picture {
            url
        }
        code
       }
       stats {
        rank
        points
        weight
        height
        age
       }
    }
  }
`;

export function fetchPlayersFromAPI() {
    return client.mutate({
        mutation: GET_PLAYERS,
    });
}