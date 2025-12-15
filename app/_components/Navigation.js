import Link from "next/link";
import Image from "next/image";
import { auth } from "@/app/_lib/auth";
import "@/app/globals.css";

export default async function Navigation() {
    const session = await auth();
    // console.log("Session: ", session);

    return (
        <nav className="z-10 text-xl">
            <ul className="flex gap-16 items-center">
                <li>
                    <Link
                        href="/cabins"
                        className="hover:text-accent-400 transition-colors text-white"
                    >
                        Cabins
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="hover:text-accent-400 transition-colors text-white"
                    >
                        About
                    </Link>
                </li>
                <li>
                    {session?.user?.image ? (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors flex items-center gap-4 text-white"
                        >
                            <img
                                className="h-8 rounded-full"
                                src={session.user.image}
                                alt={session.user.name}
                                referrerPolicy="no-referrer"
                            />
                            <span>Guest area</span>
                        </Link>
                    ) : (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors text-white"
                        >
                            Guest area
                        </Link>
                    )}
                </li>
                {/* <li>
                    <Link
                        href="/account"
                        className="hover:text-accent-400 transition-colors text-white"
                    >
                        Guest Area
                    </Link>
                </li>*/}
            </ul>
        </nav>
    );
}
