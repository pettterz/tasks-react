import { SimpleGrid } from "@chakra-ui/react";
import { Board } from "./Board";
import { useQuery } from "@apollo/client";
import { GET_BOARDS } from "../gql/query";
import { NewBoard } from "./NewBoard";
import { BoardCreateForm } from "./BoardCreateForm";
import { useDisclosure } from '@chakra-ui/react';

export const BoardList = () => {
  const { loading, error, data, refetch } = useQuery(GET_BOARDS);

  // For create button
  const { onOpen, onClose, isOpen } = useDisclosure();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {
        data.boards.map((board) => (
          <Board
            title={board.title}
            description={board.description}
            tasks={board.tasks}
            key={board.id}
          />
        ))
      }
      <NewBoard onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
        <BoardCreateForm refetch={refetch} onCancel={onClose} />
      </NewBoard>
    </SimpleGrid>
  );
}