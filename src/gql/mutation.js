import { gql } from '@apollo/client';

export const CREATE_BOARD = gql`
mutation createBoard($name: String!, $desc: String!) {
    boardAdd(
      boardInput: {
        title: $name
        description: $desc
      }
    ) {
      title
    }
  }
`;
