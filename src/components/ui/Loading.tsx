import { useAtom } from "jotai"
import { isLoadingAtom, textLoadingAtom } from "@/stores"

const Loading = () => {
    const [isLoading] = useAtom(isLoadingAtom)
    const [textLoading] = useAtom(textLoadingAtom)
    return (
        <>
            {isLoading && (
                <div className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 z-1000 flex items-center justify-center bg-base-200">
                    <div className="text-center">
                        <span className="loading loading-dots loading-xl"></span>
                        <p className="text-sm opacity-70 mt-2">{textLoading}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Loading