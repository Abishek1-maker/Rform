import React, { useState } from "react";
import Input from "./assets/components/input";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
return (
    <div className=" flex flex-col items-center justify-start w-full gap-3">
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit((data) => console.log(data))(e);
            }}
            className="space-y-4 max-w-[300px] flex flex-col w-full"
        >
            <div>
                <Input
                    title={"Username"}
                    type="text"
                    id="username"
                    {...register("username", {
                        required: "Username is required",
                    })}
                />
                {errors.username && (
                    <span className=" text-red-500">{errors.username.message}</span>
                )}
            </div>
            <div className=" w-full">
                <Input
                    title={"Email"}
                    type="text"
                    id="email"
                    {...register("email")}
                />
            </div>
            <div>
                <Input
                    title={"Password"}
                    type="password"
                    id="password"
                    {...register("password")}
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign up
                </button>
            </div>
        </form>
        <div></div>
    </div>
);
};

export default Signup;