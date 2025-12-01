import { FaLock, FaUser } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { schemaLoginRequest, type SchemaLoginRequest } from '@/xyz-panel/types/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '@/xyz-panel/api/auth';
import globalHook from '@/hooks/global';
import { setToken, setUser } from '@/xyz-panel/utils/auth';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<SchemaLoginRequest>({
        resolver: zodResolver(schemaLoginRequest),
    })
    const { toggleLoading, toggleToast } = globalHook()

    const onSubmit = async (data: SchemaLoginRequest) => {
        try {
            toggleLoading(true, `Tunggu bentar...`)
            const response = (await login(data)).data
            let user = {
                email: response.user.email,
                first_name: response.user.first_name,
                middle_name: response.user.middle_name,
                last_name: response.user.last_name,
                username: response.user.username,
                role: response.user.role,
            }
            setUser(JSON.stringify(user))
            setToken(response.access_token)
            toggleToast(true, `Selamat datang ${user.username}`, 'success')
            navigate('/dashboard')
        } catch (error) {
            const message = error instanceof Error ? error.message : "Opsss, email/username atau password salah"
            toggleToast(true, message, 'error')
        } finally {
            toggleLoading(false)
        }
    };

    return (
        <>
            <Helmet>
                <title>Login - X-LABS.my.id | Inovasi dan Pengembangan Aplikasi Mobile</title>
            </Helmet>
            <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden p-4">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Main login card */}
                <div className="card w-full max-w-md bg-base-100/90 backdrop-blur-xl shadow-2xl relative z-10 border border-base-300/50">
                    <div className="card-body">
                        {/* Logo/Title Section */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary/70 to-primary/70 mb-4 shadow-lg">
                                <svg
                                    className="w-10 h-10 text-base-100"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary/70 to-secondary/70 bg-clip-text text-transparent">
                                X-Labs XYZ Panel
                            </h2>
                            <p className="text-base-content/60 mt-2">
                                Login untuk melanjutkan
                            </p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email / Username</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute z-10 inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FaUser className='text-base-content/40' />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Email / Username"
                                        className="input input-bordered w-full pl-12 focus:input-primary transition-all duration-300"
                                        {...register('email')}
                                        required
                                    />
                                </div>
                                {errors.email && (
                                    <span className="text-error">{errors.email.message}</span>
                                )}
                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute z-10 inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FaLock className='text-base-content/40' />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="input input-bordered w-full pl-12 focus:input-primary transition-all duration-300"
                                        {...register('password')}
                                        required
                                    />
                                </div>
                                {errors.password && (
                                    <span className="text-error">{errors.password.message}</span>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className={`btn bg-blue-500/90 hover:bg-blue-400/80 w-full text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300`}
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;