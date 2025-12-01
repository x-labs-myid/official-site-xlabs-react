import { withAuthHeaders } from "@/xyz-panel/utils/auth";
import { API_URL } from "@/constant";
import { type SchemaStaticTokenRequest, type SchemaStaticTokenResponse } from "@/xyz-panel/types/static-token";

export async function getStaticToken(): Promise<SchemaStaticTokenResponse> {
    try {
        const response = await fetch(`${API_URL}/core/static-tokens`, withAuthHeaders());
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

export async function createStaticToken(request: SchemaStaticTokenRequest): Promise<SchemaStaticTokenResponse> {
    try {
        const response = await fetch(`${API_URL}/core/static-tokens`, withAuthHeaders({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }));
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

export async function updateStaticToken(guid: string, request: SchemaStaticTokenRequest): Promise<SchemaStaticTokenResponse> {
    try {
        const response = await fetch(`${API_URL}/core/static-tokens/${guid}`, withAuthHeaders({
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }));
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

export async function deleteStaticToken(guid: string): Promise<SchemaStaticTokenResponse> {
    try {
        const response = await fetch(`${API_URL}/core/static-tokens/${guid}`, withAuthHeaders({
            method: "DELETE"
        }));
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

