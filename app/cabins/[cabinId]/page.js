import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import Cabin from "@/app/_components/Cabin";

import {
    getCabin,
    getCabins,
    getBookedDatesByCabinId,
    getSettings,
} from "@/app/_lib/data-service";
import { Suspense } from "react";

// export const metadata = {
//     title: "Cabin",
// };

// Dynamic metadata
export async function generateMetadata({ params }) {
    const p = await params;
    const { name } = await getCabin(p.cabinId);
    return { title: `Cabin ${name}` };
}

// Generating static pages for the dynamic route for a single cabin
// Good for finite number of a dynamic segment
export async function generateStaticParams() {
    const cabins = await getCabins();
    const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
    return ids;
}

export default async function Page({ params }) {
    const p = await params;

    const cabin = await getCabin(p.cabinId);
    // const settings = await getSettings(p.cabinId);
    // const bookedDates = await getBookedDatesByCabinId(p.cabinId);

    // const [cabin, settings, bookedDates] = await Promise.all([
    //     getCabin(p.cabinId),
    //     getSettings(p.cabinId),
    //     getBookedDatesByCabinId(p.cabinId),
    // ]);

    // console.log("Params: ", p.cabinId);

    // console.log("Cabin: ", cabin);

    const {
        id,
        name,
        maxCapacity,
        regularPrice,
        discount,
        image,
        description,
    } = cabin;

    return (
        <div className="max-w-7xl mx-auto mt-8">
            <Cabin cabin={cabin} />

            <div>
                <h2 className="text-5xl font-semibold text-center text-accent-400 mb-10">
                    Reserve {cabin.name} today. Pay on arrival.
                </h2>
                <Suspense fallback={<Spinner />}>
                    <Reservation cabin={cabin} />
                </Suspense>
            </div>
        </div>
    );
}
