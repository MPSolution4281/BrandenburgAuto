// Required for Google Fonts on networks with corporate SSL inspection
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
