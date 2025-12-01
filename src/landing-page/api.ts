import { API_URL } from "@/constant";
import type { LandingPageAppResponse, LandingPageTermAppResponse } from "./type";

export async function getDataApp() {
    try {
        const res = await fetch(`${API_URL}/public/apps`);
        const data: LandingPageAppResponse = await res.json();
        if (!res.ok) {
            throw new Error(data.message);
        }
        return data.data;
    } catch (e) {
        console.log(e)
        throw e;
    }
}

export async function getDataTermApp(slug: string) {
    try {
        const res = await fetch(`${API_URL}/public/term-app/${slug}`);
        const data: LandingPageTermAppResponse = await res.json();
        if (!res.ok) {
            throw new Error(data.message);
        }
        return data.data;
    } catch (e) {
        console.log(e)
        throw e;
    }
}