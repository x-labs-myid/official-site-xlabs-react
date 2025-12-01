import { withAuthHeaders } from "@/xyz-panel/utils/auth";
import { API_URL } from "@/constant";
import { type SchemaCatalogAppsListResponse, type SchemaCatalogRequest, type SchemaCatalogResponse } from "@/xyz-panel/types/catalog";

export async function getCatalog(): Promise<SchemaCatalogResponse> {
    try {
        const response = await fetch(`${API_URL}/core/apps`, withAuthHeaders());
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getCatalogForApps(): Promise<SchemaCatalogAppsListResponse> {
    try {
        const response = await fetch(`${API_URL}/core/apps/catalog`, withAuthHeaders());
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

export async function createCatalog(request: SchemaCatalogRequest): Promise<SchemaCatalogResponse> {
    try {
        const response = await fetch(`${API_URL}/core/apps`, withAuthHeaders({
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

export async function updateCatalog(guid: string, request: SchemaCatalogRequest): Promise<SchemaCatalogResponse> {
    try {
        const response = await fetch(`${API_URL}/core/apps/${guid}`, withAuthHeaders({
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

export async function deleteCatalog(guid: string): Promise<SchemaCatalogResponse> {
    try {
        const response = await fetch(`${API_URL}/core/apps/${guid}`, withAuthHeaders({
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
