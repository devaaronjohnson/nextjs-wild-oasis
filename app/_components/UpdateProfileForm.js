"use client";

// import SelectCountry from "@/app/_components/SelectCountry";
import { useState } from "react";
import Image from "next/image";
import { updateGuest } from "@/app/_lib/actions";
import { useFormStatus } from "react-dom";

export function UpdateProfileForm({ guest, children }) {
    const { fullName, email, nationality, nationalID, countryFlag } = guest;

    return (
        <form
            className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
            action={updateGuest}
        >
            <div className="space-y-2">
                <label className="text-white">Full name</label>
                <input
                    name={fullName}
                    defaultValue={fullName}
                    disabled
                    className="px-5 pt-4 pb-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <label className="text-white">Email address</label>
                <input
                    name={email}
                    defaultValue={email}
                    disabled
                    className="px-5 pt-4 pb-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="text-white" htmlFor="nationality">
                        Where are you from?
                    </label>
                    <img
                        src={countryFlag}
                        alt="Country flag"
                        className="h-5 rounded-sm"
                    />
                </div>

                {children}
            </div>

            <div className="space-y-2">
                <label className="text-white" htmlFor="nationalID">
                    National ID number
                </label>
                <input
                    name="nationalID"
                    defaultValue={nationalID}
                    className="px-5 pt-4 pb-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <Button />
            </div>
        </form>
    );
}

function Button() {
    const { pending } = useFormStatus();
    return (
        <button
            className="bg-accent-500 px-8 pt-5 pb-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 cursor-pointer"
            disabled={pending}
        >
            {pending ? "updating..." : "Update profile"}
        </button>
    );
}
