import { useState } from "react";
import { Completion } from "../models/Completion";
import { CompletionRepository } from "../repositories/Completion";

export function conversationViewModel() {
    const [message, setMessage] = useState("");
    const [completions, setCompletions] = useState<Completion[]>([]);

    const completionRepository = new CompletionRepository();

    async function handleSendMessage() {
        try {
            if (!message) return;

            const completion = await completionRepository.create(message);
            setCompletions(prev => [...prev, completion]);
        } catch (error) {
            console.log(error)
        }
    }

    function handleChangeMessage(value: string) {
        setMessage(value);
    }

    return {
        completions,
        handleSendMessage,
        handleChangeMessage
    }

}