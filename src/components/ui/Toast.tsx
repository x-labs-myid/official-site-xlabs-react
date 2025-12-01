"use client"

import { messageToast, showToast, typeToast } from "@/stores"
import { useAtom } from "jotai"
import { FaCircleInfo, FaFaceSadCry } from "react-icons/fa6"

const Toast = () => {
    const [show] = useAtom(showToast)
    const [message] = useAtom(messageToast)
    const [type] = useAtom(typeToast)
    return (
        <>
            {show && (
                <div className="toast toast-end">
                    <div className={`alert ${type === 'success' ? 'alert-success' : 'alert-error'} text-white`}>
                        {type === 'success' ? <FaCircleInfo /> : <FaFaceSadCry />}
                        <span>{message}</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Toast