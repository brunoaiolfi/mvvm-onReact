import { Box, IconButton, Input, Text } from "@chakra-ui/react";
import { conversationViewModel } from "./viewModel";
import { CiPaperplane } from "react-icons/ci";

export function ConversationView() {

    const {
        completions,
        message,
        isLoading,
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
                                textAlign="right"
                            >
                                <Text
                                    fontSize="1.25rem"
                                    fontWeight={700}
                                >
                                    Você
                                </Text>
                                <Text
                                    fontSize="1rem"
                                >
                                    {item.message}
                                </Text>
                            </Box>
                            <Box
                                w="100%"
                                padding="8px"
                            >
                                <Text
                                    fontSize="1.25rem"
                                    fontWeight={700}
                                >
                                    ChatSGB
                                </Text>
                                <Text
                                    fontSize="1rem"
                                    dangerouslySetInnerHTML={{ __html: item.response.replace(/\n/g, "<br />") }}
                                >
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

                <IconButton
                    isLoading={isLoading}
                    w="3.5rem"
                    h="3.5rem"
                    aria-label="Enviar"
                    colorScheme="blue"
                    icon={<CiPaperplane size={24} />}
                    onClick={handleSendMessage}
                />

            </Box>
        </Box>
    )
}