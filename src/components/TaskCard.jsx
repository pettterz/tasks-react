import {
    Heading,
    Text,
    Box,
} from "@chakra-ui/react";

export const TaskCard = (props) => {
    const { title, description } = props;

    return (<Box>
        <Heading size='xs' >
            Task Title: { title }
        </Heading>
        <Text pt='2' fontSize='sm'>
            Task Description: { description }
        </Text>
    </Box>);
} 