/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tdijrdrhceryogtrkklg.supabase.co',
        pathname: '/storage/v1/object/public/cabin-images/**',
      },
    ],
  },
  // output: "export"
};

export default nextConfig;
