// src/services/graphqlService.ts
import { gql } from '@apollo/client';
import client from './graphql/apollo';
import { Match } from '../Match';
import { Player } from '../Player';
export const fetchMatchesFromGraphQL = async (): Promise<Match[]> => {
  try {
    const response = await client.query({
      query: gql`
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
      `,
    });

    return response.data.matches;
  } catch (error) {
    console.error('Error fetching matches from GraphQL:', error);
    throw error;
  }
};

export const fetchPlayersFromGraphQL = async (): Promise<Player[]> => {
    try {
      const response = await client.query({
        query: gql`
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
        `,
      });
  
      return response.data.players as Player[];
    } catch (error) {
      console.error('Error fetching players from GraphQL:', error);
      throw error;
    }
  };
