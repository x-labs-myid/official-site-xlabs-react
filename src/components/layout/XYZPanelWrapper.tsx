import { getToken } from "@/xyz-panel/utils/auth"
import Loading from "@/components/ui/Loading"
import Toast from "@/components/ui/Toast"
import { Navigate, useLocation } from "react-router-dom"

const XYZPanelWrapper = ({ children }: { children: React.ReactNode }) => {
    const token = getToken()
    const location = useLocation()
    if (!token && location.pathname !== '/login') {
        return <Navigate to="/login" />
    }
    return (
        <>
            {children}
            <Loading />
            <Toast />
        </>
    )
}

export default XYZPanelWrapper