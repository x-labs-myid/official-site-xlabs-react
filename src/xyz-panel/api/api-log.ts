import { API_URL } from "@/constant";
import type { SchemaApiLogResponse } from "@/xyz-panel/types/api-log";
import { withAuthHeaders } from "@/xyz-panel/utils/auth";

export async function getApiLog(page: number, limit: number): Promise<SchemaApiLogResponse> {
    try {
        let url = `core/log/api-stats`
        if (page && limit) {
            url += `?page=${page}&limit=${limit}`
        }
        const response = await fetch(`${API_URL}/${url}`, withAuthHeaders());
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw error;
    }
}