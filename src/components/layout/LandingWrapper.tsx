import Loading from "@/components/ui/Loading"
import Toast from "@/components/ui/Toast"

const LandingWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Loading />
            <Toast />
        </>
    )
}

export default LandingWrapper