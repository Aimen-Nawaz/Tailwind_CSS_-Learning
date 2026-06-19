import { Eye, EyeClosed } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod'


const registerSchema = z.object(
    {
        email: z.string().email("Please enter valid email"),
        password: z.string().min(6, "password should be of 6 chracter"),
        confirmPassword: z.string()
    }
)
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"], // Points the error to the confirmPassword field
    });

const RegisterForm = () => {

    const [showPass, setShowPass] = useState({
        password: false,
        confirmPassword: false
    })

    const toggleShowPass = (field) => {
        setShowPass((prev) => ({ ...prev, [field]: !prev[field] }));
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, }
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async (data) => {
        // Simulated API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form successfully submitted:", data);
        reset();
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
            <div className='p-6 border border-gray-200 bg-white shadow-lg rounded-xl w-full max-w-md flex flex-col items-center'>
                <form
                    className='flex flex-col items-center justify-center gap-4 rounded-lg w-full'

                    onSubmit={handleSubmit(onSubmit)}
                >

                    <h2 className='text-3xl font-bold text-gray-800 mb-2'>
                        Sign Up
                    </h2>


                    <div className="w-full">
                        <input
                            type="email"
                            {...register("email")}
                            className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {errors.email && <p className='text-sm text-destructive'>{errors.email.message}</p>}
                    </div>

                    <div className="w-full relative">
                        <input
                            type={showPass.password ? "text" : "password"}
                            {...register("password")}
                            className='w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        <button name="password" onClick={() => toggleShowPass("password")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" >
                            {showPass.password ? <EyeClosed /> : <Eye />}
                        </button>
                        {errors.password && <p className='text-sm text-destructive'>{errors.password.message}</p>}
                    </div>

                    <div className="loginForm-inputBox w-full relative">
                        <input
                            type={showPass.confirmPassword ? "text" : "password"}
                            {...register("confirmPassword")}
                            className='w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        <button name="confirmPassword" onClick={() => toggleShowPass("confirmPassword")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                            {showPass.confirmPassword ? <EyeClosed /> : <Eye />}
                        </button>
                    {errors.confirmPassword && <p className='text-sm text-destructive'>{errors.confirmPassword.message}</p>}
            </div>

            <div className="w-full">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300'
                >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                </button>

            </div>

            <p className='text-gray-600 text-center'>
                Already have an account?{" "}
                <a
                    href="/login"
                    className='text-blue-600 font-medium hover:underline'
                >
                    Login
                </a>
            </p>


        </form>
        </div >
    </div >
)
}

export default RegisterForm