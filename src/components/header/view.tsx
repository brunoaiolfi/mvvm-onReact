import { Avatar, Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import { HeaderViewModel } from './viewModel'

export function HeaderView() {

    const { handleNavigate } = HeaderViewModel();

    return (
        <Box
            w="100vw"
            p="16px"
            display={"flex"}
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex
                alignItems="center"
                gap="4px"
            >
                <Avatar
                    w="24px"
                    h="24px"
                    src="https://avatars.githubusercontent.com/u/77445921?v=4"
                />
                <Text
                    fontWeight="bold"
                >
                    ChatSGB
                </Text>
            </Flex>

            <ButtonGroup
                spacing={4}
            >
                <Button
                    colorScheme='blue'
                    variant={"link"}
                    onClick={() => handleNavigate('/')}
                >
                    Conversa
                </Button>
                <Button
                    colorScheme='blue'
                    variant={"link"}
                    onClick={() => handleNavigate('/cadastro')}
                >
                    Cadastro
                </Button>
            </ButtonGroup>
        </Box>
    )
}