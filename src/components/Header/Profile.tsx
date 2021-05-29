import { Flex, Box, Text, Avatar  } from "@chakra-ui/react";

export function Profile() {
    return(
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Diego Ferreira</Text>
            <Text color="gray.300" fontSize="small">
                diegoferreira1964@gmail.com
            </Text>
        </Box>

        <Avatar size="md" name="Diego Ferreira" src=""/>
    </Flex>
    );
}