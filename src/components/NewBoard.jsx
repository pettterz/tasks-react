import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  FocusLock,
} from "@chakra-ui/react";

export const NewBoard = ({ onOpen, onClose, isOpen, children }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'> Create A New Board? </Heading>
      </CardHeader>
      <CardBody>

        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          placement='right'
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button>Create</Button>
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverCloseButton />
              {children}
            </FocusLock>
          </PopoverContent>
        </Popover>
      </CardBody>
    </Card>
  );
}

