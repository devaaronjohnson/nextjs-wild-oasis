"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenuButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="block lg:hidden"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
            >
                <Image alt="menu" width="25" height="25" src="/bars.svg" />
            </button>
            {/* Overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
                      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* Slide-in Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-primary-950 text-white z-[999999999999999999]
                      transform transition-transform duration-300 ease-in-out
                      ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="p-4 text-2xl"
                >
                    ✕
                </button>

                {/* Navigation */}
                <nav className="flex flex-col gap-6 p-6">
                    <Link
                        href="/"
                        className="hover:text-accent font-monument font-normal text-white text-3xl"
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-accent font-monument font-normal text-white text-3xl"
                        onClick={() => setOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/cabins"
                        className="hover:text-accent font-monument font-normal text-white text-3xl"
                        onClick={() => setOpen(false)}
                    >
                        Cabins
                    </Link>
                    <Link
                        href="/account"
                        className="hover:text-accent font-monument font-normal text-white text-3xl"
                        onClick={() => setOpen(false)}
                    >
                        Guest Area
                    </Link>
                </nav>
            </div>
        </>
    );
}
