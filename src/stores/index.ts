import { atom } from "jotai";

// toast
export const showToast = atom<boolean>(false)
export const messageToast = atom<string>('')
export const typeToast = atom<string>('') // true or false

// loading
export const isLoadingAtom = atom<boolean>(false)
export const textLoadingAtom = atom<string>('')