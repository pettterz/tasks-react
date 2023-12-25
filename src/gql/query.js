import { gql } from '@apollo/client';

export const GET_BOARDS = gql(`
query queryBoards {
    boards {
      id
      title
      description
      tasks {
        id
        title
        description
      }
    }
  }
`);