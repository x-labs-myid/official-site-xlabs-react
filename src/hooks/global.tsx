import { useSetAtom } from "jotai"
import { isLoadingAtom, messageToast, showToast, textLoadingAtom, typeToast } from "@/stores"

type TypeToast = 'success' | 'error'

const globalHook = () => {
    const setShow = useSetAtom(showToast)
    const setMessage = useSetAtom(messageToast)
    const setType = useSetAtom(typeToast)
    const setIsLoading = useSetAtom(isLoadingAtom)
    const setTextLoading = useSetAtom(textLoadingAtom)

    function toggleToast(show: boolean, message: string, type: TypeToast = 'success') {
        setShow(show)
        setMessage(message)
        setType(type)
        setTimeout(() => {
            setShow(false)
        }, 5000)
    }

    function toggleLoading(status: boolean, text: string = '') {
        setIsLoading(status)
        setTextLoading(text)
    }

    return {
        toggleToast,
        toggleLoading
    }
}

export default globalHook