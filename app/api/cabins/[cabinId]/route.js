import { getCabin, getBookedDatesByCabinId } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
    const p = await params;
    const { cabinId } = p;
    // console.log("Request: ", request);
    // console.log("Params: ", cabinId);

    try {
        const [cabin, bookedDates] = await Promise.all([
            getCabin(cabinId),
            getBookedDatesByCabinId(cabinId),
        ]);
        return Response.json({ cabin, bookedDates });
    } catch {
        return Response.json({ message: "Cabin not found." });
    }
}
