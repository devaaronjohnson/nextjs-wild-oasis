import Link from "next/link";

function NotFound() {
    return (
        <main className="text-center space-y-6 mt-4">
            <p className="text-white text-5xl text-center">404</p>
            <h1 className="text-3xl font-semibold text-white">
                This cabin cannot be found.
            </h1>
            <Link
                href="/cabins"
                className="inline-block bg-accent-500 text-primary-800 px-6 pt-3 pb-2 text-lg"
            >
                View Cabins
            </Link>
        </main>
    );
}

export default NotFound;
