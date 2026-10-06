const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === "production" ? { basePath: "/itz-fizz-hero" } : {}),
};

export default nextConfig;
