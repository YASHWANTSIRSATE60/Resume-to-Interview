import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "R2I — Resume to Interview",
    short_name: "R2I",
    description: "Your AI Career Agent.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F8FA",
    theme_color: "#142A3A",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
