import {
    Button,
    ButtonGroup,
    Stack,
    Input,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useMutation } from "@apollo/client";
  import { CREATE_BOARD } from "../gql/mutation";

export const BoardCreateForm = ({ onCancel, refetch }) => {
    const [name, setName] = useState("A New Board");
    const handleNameChange = (event) => setName(event.target.value);
  
    const [desc, setDesc] = useState("New Board description");
    const handleDescChange = (event) => setDesc(event.target.value);
  
    const [createBoard, { data }] = useMutation(CREATE_BOARD);
  
    const onSaveSubmit = (e) => {
      e.preventDefault();
      createBoard({
        variables: {
          name,
          desc,
        }
      });
    };

    if (data) {
        refetch();
        onCancel();
    }
  
    return (
      <Stack spacing={4}>
        <Input
          label='Board Name'
          id='board-name'
          value={name}
          onChange={handleNameChange}
          type="text"
        />
        <Input
          label='Board Description'
          id='board-description'
          value={desc}
          onChange={handleDescChange}
          type="text"
        />
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme='teal' onClick={onSaveSubmit}>
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    )
  };
  