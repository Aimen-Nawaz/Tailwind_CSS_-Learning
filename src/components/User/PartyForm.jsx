import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const partySchema = z.object({
    name: z.string().min(2, "Please enter your first name"),
    lastname: z.string().min(2, "Please enter your last name"),
    email: z.string().email("Please enter a valid email"),
    attendance: z.string().min(1, "Please select attendance"),
    category: z.string().min(1, "Please select food preference"),
    isBringingGuest: z.boolean().optional(),
});

const PartyForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(partySchema),
        defaultValues: {
            name: "",
            lastname: "",
            email: "",
            attendance: "",
            category: "",
            isBringingGuest: false,
        },
    });

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        reset();
    };

    return (
        <div className="min-h-screen w-full bg-linear-to-r from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center p-6">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border-amber-500">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    <h1 className="text-4xl font-bold text-center">
                        Party Invitation
                    </h1>


                    <h3 className="text-center  text-gray-600 mb-6">
                        Join our party by completing the form below
                    </h3>

                    <div className="bg-pink-100 rounded-lg p-4 mb-6">
                        <h2 className="font-semibold">Date: August 15, 2026</h2>
                        <h2 className="font-semibold">Time: 7:00 PM</h2>
                        <h2 className="font-semibold">Location: F Block, Satellite Town</h2>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            {...register("name")}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

            
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            {...register("lastname")}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                        />
                        {errors.lastname && (
                            <p className="text-red-500 text-sm">
                                {errors.lastname.message}
                            </p>
                        )}
                    </div>

    
                    <div>
                        <input
                            type="email"
                            placeholder="email@gmail.com"
                            {...register("email")}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

        
                    <div>
                        <h3 className="font-semibold mb-2">
                            Will you come?
                        </h3>

                        <label className="mr-4">
                            <input
                                type="radio"
                                value="yes"
                                {...register("attendance")}
                            />{" "}
                            Yes
                        </label>

                        <label className="mr-4">
                            <input
                                type="radio"
                                value="no"
                                {...register("attendance")}
                            />{" "}
                            No
                        </label>

                        <label>
                            <input
                                type="radio"
                                value="maybe"
                                {...register("attendance")}
                            />{" "}
                            Maybe
                        </label>

                        {errors.attendance && (
                            <p className="text-red-500 text-sm">
                                {errors.attendance.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <select
                            {...register("category")}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                        >
                            <option value="">Select a category</option>
                            <option value="veg">Vegetarian</option>
                            <option value="nonveg">Non-Vegetarian</option>
                            <option value="drinks">Drinks Only</option>
                            <option value="dessert">Desserts</option>
                        </select>

                        {errors.category && (
                            <p className="text-red-500 text-sm">
                                {errors.category.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                {...register("isBringingGuest")}
                            />
                            Bringing a guest?
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PartyForm;