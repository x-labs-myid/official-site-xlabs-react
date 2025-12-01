import { withAuthHeaders } from "@/xyz-panel/utils/auth";
import { API_URL } from "@/constant";
import { type SchemaUserDeviceResponse } from "@/xyz-panel/types/user-device";

export async function getUserDevice(page: number, limit: number): Promise<SchemaUserDeviceResponse> {
    try {
        let url = `core/log/device`
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