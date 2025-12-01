import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getApiLog } from "@/xyz-panel/api/api-log";
import { getUserDevice } from "@/xyz-panel/api/user-device";
import globalHook from "@/hooks/global";
import { logout } from "@/xyz-panel/utils/auth";

const Dashboard = () => {
    const [totalApiLog, setTotalApiLog] = useState<number>(0);
    const [totalUserDevice, setTotalUserDevice] = useState<number>(0);

    const { toggleToast, toggleLoading } = globalHook()

    const getDataDashboard = async () => {
        try {
            toggleLoading(true, "Lagi ngambil data dashboard...")
            const [apiLog, userDevice] = await Promise.all([
                getApiLog(0, 0),
                getUserDevice(0, 0)
            ])
            setTotalApiLog(apiLog.total)
            setTotalUserDevice(userDevice.total)
        } catch (error) {
            const message = error instanceof Error ? error.message : "Gagal memuat data dashboard"
            toggleToast(true, message, "error")
            logout()
        } finally {
            toggleLoading(false)
        }
    }

    useEffect(() => {
        getDataDashboard();
    }, [])

    return (
        <>
            <Helmet>
                <title>Dashboard - X-LABS.my.id | Inovasi dan Pengembangan Aplikasi Mobile</title>
            </Helmet>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-full lg:w-[50%] xl:w-[50%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                    <div className="card w-full lg:w-96 xl:w-96 bg-base-200 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Total API Log</h2>
                            <p>{totalApiLog} Data</p>
                        </div>
                    </div>
                    <div className="card w-full lg:w-96 xl:w-96 bg-base-200 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Total User Device</h2>
                            <p>{totalUserDevice} Data</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard