import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataTermApp } from '@/landing-page/api';
import type { LandingPageTermAppData } from '@/landing-page/type';
import globalHook from '@/hooks/global';
import { Helmet } from 'react-helmet-async';

const WithParam = () => {
    const { app, slug } = useParams();
    const titleWeb = app?.replaceAll("-", " ").toLocaleUpperCase()
    const [data, setData] = useState<LandingPageTermAppData>();
    const { toggleLoading, toggleToast } = globalHook()

    async function getData() {
        try {
            toggleLoading(true, `Lagi ngambil data ${app}...`)
            const res = await getDataTermApp(`${app}/${slug}`)
            setData(res)
        } catch (e) {
            const message = e instanceof Error ? e.message : "Terjadi kesalahan"
            toggleToast(true, message, 'error')
        } finally {
            toggleLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    if (!data) return null

    return (
        <>
            <Helmet>
                <title>{titleWeb ? `${titleWeb} - X-LABS.my.id | Inovasi dan Pengembangan Aplikasi Mobile` : 'X-LABS.my.id | Inovasi dan Pengembangan Aplikasi Mobile'}</title>
            </Helmet>
            <div className="w-full min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
                {/* Hero Section */}
                <section className="hero min-h-[10vh] bg-base-200">
                    <div className="hero-content text-center">
                        <div className="py-6 w-full flex flex-col items-center space-y-4">
                            <img src={data?.app.icon_url} alt={data?.app.name} className="rounded-xl w-32 h-32 object-cover" loading="lazy" />
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {data?.app.name}
                            </h3>
                            <p className="mt-2 text-lg opacity-80">
                                {data?.app.short_description}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full h-full flex flex-col justify-center items-center mt-4">
                    <div className="w-[100%] lg:w-[50%] xl:w-[50%] bg-base-300 px-8 py-16 rounded-lg">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {data?.app.name}
                        </h1>
                        <div
                            className="mt-6 text-base leading-relaxed [&_p]:mb-4 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol_li]:mb-3 [&_b]:font-bold [&_strong]:font-bold [&_br]:block [&_br]:mb-2"
                            dangerouslySetInnerHTML={{ __html: data?.term.content || '' }}
                        />
                    </div>
                </section>
            </div>
        </>
    );
}

export default WithParam