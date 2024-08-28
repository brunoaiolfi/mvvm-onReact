import { Avatar, Box, Input, Text } from "@chakra-ui/react";
import { conversationViewModel } from "./viewModel";

export function ConversationView() {

    const {
        completions,
        message,
        onRenderButtonSubmit,
        handleChangeMessage,
        handleSendMessage
    } = conversationViewModel();

    return (
        <Box
            w="50vw"
            h="100%"

            display="flex"
            flexDirection="column"
            gap="24px"

            overflow="hidden"
            padding="16px"
        >
            <Box
                w="100%"
                h="calc(100% - 5rem)"
                
                overflow="auto"
                overflowY="scroll"
                overflowX="hidden"
            >
                {
                    completions.map((item, index) => (
                        <Box
                            key={index}
                            w="100%"
                            h="auto"
                            display="flex"
                            flexDirection="column"
                            alignItems={item.response ? "flex-start" : "flex-end"}
                            gap="8px"
                        >
                            <Box
                                w="100%"
                                padding="8px"
                            >
                                <Text
                                    textAlign="right"
                                    fontSize="1rem"
                                    fontWeight={600}
                                >
                                    {item.message}
                                </Text>
                            </Box>
                            <Box
                                w="100%"
                                padding="8px"
                            >
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    gap="8px"
                                    marginBottom={"12px"}
                                >
                                    <Avatar
                                        w="24px"
                                        h="24px"
                                        name="ChatSGB"
                                        src="https://avatars.githubusercontent.com/u/77445921?v=4"
                                    />
                                    <Text
                                        fontSize="1.25rem"
                                        fontWeight={600}
                                    >
                                        ChatSGB
                                    </Text>
                                </Box>
                                <Text
                                    fontSize="1rem"
                                    fontWeight={600}
                                >
                                    {item.response}
                                </Text>
                            </Box>
                        </Box>
                    ))
                }
            </Box>

            <Box
                w="100%"
                h="3.5rem"

                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"

                gap="1rem"
            >
                <Input
                    w="100%"
                    h="3.5rem"

                    value={message}
                    placeholder="Mensagem ChatSGB"
                    onChange={e => handleChangeMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage();
                        }
                    }}
                />

                {onRenderButtonSubmit()}

            </Box>
        </Box>
    )
}