import { useState } from "react";
import { Completion } from "../models/Completion";
import { CompletionRepository } from "../repositories/Completion";
import { Spinner, IconButton, Box } from "@chakra-ui/react";
import { CiPaperplane } from "react-icons/ci";

export function conversationViewModel() {

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [completions, setCompletions] = useState<Completion[]>([]);

    const completionRepository = new CompletionRepository();

    async function handleSendMessage() {
        setIsLoading(true);
        try {
            if (!message) return;

            const completion = await completionRepository.create(message);
            setCompletions(prev => [...prev, completion]);
            setMessage("");

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    function handleChangeMessage(value: string) {
        setMessage(value);
    }

    function onRenderButtonSubmit() {
        return <IconButton
            w="3.5rem"
            h="3.5rem"
            aria-label="Enviar"
            colorScheme="blue"
            icon={
                isLoading ?
                    <Spinner color="white" />
                    :
                    <CiPaperplane size={24} />
            }
            onClick={handleSendMessage}
        />
    }

    return {
        completions,
        message,
        handleSendMessage,
        handleChangeMessage,
        isLoading,
        onRenderButtonSubmit
    }

}