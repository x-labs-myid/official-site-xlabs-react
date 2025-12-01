import { type SchemaTermRequest, type SchemaTermResponse } from "@/xyz-panel/types/term";
import { withAuthHeaders } from "@/xyz-panel/utils/auth";
import { API_URL } from "@/constant";

export async function getTerms(): Promise<SchemaTermResponse> {
    try {
        const response = await fetch(`${API_URL}/core/term-apps`, withAuthHeaders());
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

export async function createTerms(request: SchemaTermRequest): Promise<SchemaTermResponse> {
    try {
        const response = await fetch(`${API_URL}/core/term-apps`, withAuthHeaders({
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

export async function updateTerms(guid: string, request: SchemaTermRequest): Promise<SchemaTermResponse> {
    try {
        const response = await fetch(`${API_URL}/core/term-apps/${guid}`, withAuthHeaders({
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

export async function deleteTerms(guid: string): Promise<boolean> {
    try {
        const response = await fetch(`${API_URL}/core/term-apps/${guid}`, withAuthHeaders({
            method: "DELETE"
        }));
        if (!response.ok) {
            throw new Error("Gagal menghapus data term");
        }
        return true;
    } catch (error) {
        throw error;
    }
}
