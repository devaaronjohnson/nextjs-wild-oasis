import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
    title: "Login",
};

export default function Page() {
    return (
        <div className="flex flex-col gap-10 mt-10 items-center">
            <h2 className="text-3xl text-white font-semibold">
                Sign In to Access Your Guest Area
            </h2>
            <SignInButton />
        </div>
    );
}
