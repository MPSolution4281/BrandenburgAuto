// Required for Google Fonts on networks with corporate SSL inspection
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      { source: "/contact-8", destination: "/kontakt", permanent: true },
      { source: "/kontaktformular", destination: "/kontakt", permanent: true },
      { source: "/blank", destination: "/", permanent: true },
      { source: "/blank-3", destination: "/", permanent: true }
    ];
  }
};

export default nextConfig;
