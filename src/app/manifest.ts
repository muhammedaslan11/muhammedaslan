import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammed Ali Aslan — Frontend Developer & Media",
    short_name: "M. Ali Aslan",
    description:
      "Frontend Developer with 3.5 years of experience in React, Next.js, TypeScript, and TailwindCSS.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/medias/favicon.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/medias/favicon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
