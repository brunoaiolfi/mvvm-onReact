import { useState } from "react";
import { Completion } from "../models/Completion";
import { CompletionRepository } from "../repositories/Completion";
import { useToast } from "@chakra-ui/react";

export function conversationViewModel() {

    const toast = useToast();

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [completions, setCompletions] = useState<Completion[]>([]);

    const completionRepository = new CompletionRepository();

    async function handleSendMessage() {
        setIsLoading(true);
        try {
            if (!message) return toast({
                title: "Preencha a mensagem corretamente",
                status: "info",
            });

            const completion = await completionRepository.create(message);
            setCompletions(prev => [...prev, completion]);
            setMessage("");

        } catch (error: any) {
            toast({
                title: `Erro ao enviar a mensagem. ${error.message}`,
                status: "error",
            })
        } finally {
            setIsLoading(false);
        }
    }

    function handleChangeMessage(value: string) {
        setMessage(value);
    }

    return {
        completions,
        message,
        handleSendMessage,
        handleChangeMessage,
        isLoading
    }

}