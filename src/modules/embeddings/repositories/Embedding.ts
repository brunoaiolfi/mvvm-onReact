import { api } from "../../../infra/api";
import { Response } from "../../../types/apiResponse";
import { Embedding } from "../models/Embedding";

export class EmbeddingRepository {
    async createByManual(Manual: File) {
        try {
            const formData = new FormData();
            formData.append('file', Manual);

            const { data } = await api.post<Response<Embedding>>('/embedding/byManual', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return data.content;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async createByText(text: string) {
        try {
            const { data } = await api.post<Response<Embedding>>('/embedding/byText', { text });

            return data.content;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}