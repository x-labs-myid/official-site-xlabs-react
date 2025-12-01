import { API_URL } from "@/constant";
import type { SchemaLoginRequest, SchemaLoginResponse } from "@/xyz-panel/types/auth";

export async function login(data: SchemaLoginRequest): Promise<SchemaLoginResponse> {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.messages.error);
        }
        return result;
    } catch (error) {
        throw error;
    }
}
