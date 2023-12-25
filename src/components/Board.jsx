import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";

export const Board = (props) => {
  const { title, description, tasks } = props;
  return (
    <Card>
      <CardHeader>
        <Heading size='md'> {title} </Heading>
        <Heading size='sm'> {description} </Heading>

      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {
            tasks.map((task) => (
              <TaskCard title={task.title} description={task.description} key={task.id} />
            ))
          }
        </Stack>
      </CardBody>
      <CardFooter>
        <Button>Create Task</Button>
      </CardFooter>
    </Card>
  );
}