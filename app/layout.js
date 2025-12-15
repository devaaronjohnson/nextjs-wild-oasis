import Logo from "@/app/_components/Logo";
import Header from "@/app/_components/Header";
import "@/app/globals.css";
import { ReservationProvider } from "@/app/_components/ReservationContext";

// Fonts
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

console.log(josefin);

export const metadata = {
    // title: "Wild Oasis",
    title: {
        template: "%s | The Wild Oasis",
        default: "Welcome | The Wild Oasis",
    },
    description:
        "Luxurious cabin hotel, located in the heart of the Smokey Mountains",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${josefin.className} antialiased bg-primary-950 text-white min-h-screen flex flex-col`}
            >
                <Header />
                <div className="flex-1 px-8 py-12 grid w-full">
                    <main className="w-full max-w-7xl mx-auto">
                        <ReservationProvider>{children}</ReservationProvider>
                    </main>
                </div>
            </body>
        </html>
    );
}
