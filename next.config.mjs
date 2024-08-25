/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'res.cloudinary.com',
            },
            {
                protocol:'https',
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol:'https',
                hostname: 'firebasestorage.googleapis.com',
            },
        ]    
    }
};

export default nextConfig;
