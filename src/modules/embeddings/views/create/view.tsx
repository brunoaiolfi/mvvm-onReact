import { Box } from "@chakra-ui/react";
import { EmbeddingsCreateViewModel } from "./viewModel";

export function EmbeddingCreateView() {

    const {
        renderHeaderButtons,
        renderFormBasedOnViewMode: renderManualBasedOnViewMode
    } = EmbeddingsCreateViewModel();

    return (
        <Box
            w="50vw"
            h="100%"

            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"

            overflow="hidden"
        >

            <Box
                p="32px"

                display="flex"
                flexDirection="column"

                boxShadow={"2xl"}
                borderRadius={8}
            >
                {renderHeaderButtons()}

                {renderManualBasedOnViewMode()}
            </Box>
        </Box>
    )
}