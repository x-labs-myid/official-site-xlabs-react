import { KEY_TOKEN, KEY_USER } from "@/constant"

export function withAuthHeaders(init?: RequestInit): RequestInit {
    if (typeof window === 'undefined') return init || {};
    const token = getToken();
    const headers = new Headers(init?.headers || {});
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return { ...init, headers };
}

export function logout(): void {
    removeToken()
    removeUser()
    window.location.replace('/login')
}

export function setToken(token: string): void {
    localStorage.setItem(KEY_TOKEN, token)
}

export function setUser(user: string): void {
    localStorage.setItem(KEY_USER, user)
}

export function getToken(): string | null {
    return localStorage.getItem(KEY_TOKEN)
}

export function getUser() {
    return JSON.parse(localStorage.getItem(KEY_USER) || "{}")
}

export function removeToken(): void {
    localStorage.removeItem(KEY_TOKEN)
}

export function removeUser(): void {
    localStorage.removeItem(KEY_USER)
}

export function clearAll(): void {
    localStorage.clear()
}