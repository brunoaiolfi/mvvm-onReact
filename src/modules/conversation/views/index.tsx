import { Box, IconButton, Input } from "@chakra-ui/react";
import { CiPaperplane } from "react-icons/ci";
import { conversationViewModel } from "./viewModel";

export function ConversationView() {

    const {
        completions,
        handleChangeMessage,
        handleSendMessage
    } = conversationViewModel();

    return (
        <Box
            position={"relative"}
            w="70vw"
            h="100%"

            padding="16px"
        >
            <Box>
                {
                    completions.map((item, index) => (
                        <Box
                            key={index}
                            w="100%"
                            display="flex"
                            flexDirection="column"
                            alignItems={item.response ? "flex-start" : "flex-end"}
                            gap="8px"
                        >
                            <Box
                                w="100%"
                                padding="8px"
                                borderRadius="8px"
                                backgroundColor={"gray.100"}
                                color={"black"}
                            >
                                {item.message}
                            </Box>
                            <Box
                                w="100%"
                                padding="8px"
                                borderRadius="8px"
                                backgroundColor={"blue.500"}
                                color={"white"}
                            >
                                {item.response}
                            </Box>
                        </Box>
                    ))
                }
            </Box>

            <Box
                w="100%"

                position={"absolute"}
                bottom="16px"

                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                gap="1rem"
            >
                <Input
                    w="100%"
                    h="3.5rem"

                    placeholder="Mensagem ChatSGB"
                    onChange={e => handleChangeMessage(e.target.value)}
                />
                <IconButton
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