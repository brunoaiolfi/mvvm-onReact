import { api } from "../../../infra/api";
import { Response } from "../../../types/apiResponse";
import { Completion } from "../models/Completion";

export class CompletionRepository {
    public async create(message: string): Promise<Completion> {
        try {
            const { data } = await api.post<Response<Completion>>('/openai/chat', {
                message
            });

            return data.content;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}