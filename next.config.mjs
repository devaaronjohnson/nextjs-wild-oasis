/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "quwwrtxqkjthsxhfosvu.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/**",
            },
        ],
    },
    // output: "export" -> Use this if you want to export the entire application as a static app; it will throw an error if there are any dynamic routes found when building
};

export default nextConfig;
